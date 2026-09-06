// =============================================================================
// SoulSpecies Official Scrapbook Field Passport Exporter
// Captures the currently displayed Field Passport (#passport-card-element)
// with full visual fidelity, loading states, cross-browser download triggers,
// and high-resolution Canvas fallback.
// =============================================================================

class CardExporter {
    /**
     * Captures and downloads the currently displayed Field Passport.
     * @param {Object} creature - The active twin/creature object
     * @param {string} userPhotoDataUrl - The user photo data URI or URL
     * @param {string|number} matchPercentage - DNA Match Percentage
     * @param {number} answersCount - Number of answered questions
     * @param {HTMLElement} [btnElement] - The download button to show loading states on
     */
    static async generateAndDownload(creature, userPhotoDataUrl, matchPercentage, answersCount, btnElement) {
        const btn = btnElement || document.getElementById('btn-download-card');
        const origBtnHtml = btn ? btn.innerHTML : '<span>📥</span> Download Field Passport (PNG)';

        // 1. Set Loading State on Button
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span>⏳</span> Preparing your Field Passport…';
        }

        try {
            // 2. Wait for web fonts and DOM elements to fully render
            if (document.fonts && document.fonts.ready) {
                try {
                    await document.fonts.ready;
                } catch (fontErr) {
                    console.warn('Font loading wait warning:', fontErr);
                }
            }

            // Brief pause to ensure SVG animations and layout settle
            await new Promise(resolve => setTimeout(resolve, 280));

            const passportEl = document.getElementById('passport-card-element');

            // ── STRATEGY A: High-Fidelity Capture of Currently Displayed Passport via html2canvas ──
            if (typeof html2canvas === 'function' && passportEl) {
                try {
                    const canvas = await html2canvas(passportEl, {
                        scale: 2, // 2x high resolution retina capture
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#F5EBDD', // Match aged ivory paper
                        logging: false,
                        scrollX: 0,
                        scrollY: 0,
                        onclone: (clonedDoc) => {
                            const clonedCard = clonedDoc.getElementById('passport-card-element');
                            if (clonedCard) {
                                clonedCard.style.transform = 'none'; // Straighten for download
                                clonedCard.style.boxShadow = 'none';
                                clonedCard.style.margin = '0';
                            }
                        }
                    });

                    await this.triggerCanvasDownload(canvas, creature);
                    this.setButtonSuccess(btn, origBtnHtml);
                    return;
                } catch (html2canvasErr) {
                    console.warn('html2canvas capture failed, falling back to direct canvas generator:', html2canvasErr);
                }
            }

            // ── STRATEGY B: High-Resolution Native Canvas Generator Fallback ────────
            const canvas = await this.renderFallbackPassportCanvas(creature, userPhotoDataUrl, matchPercentage);
            await this.triggerCanvasDownload(canvas, creature);
            this.setButtonSuccess(btn, origBtnHtml);

        } catch (err) {
            console.error('Field Passport Export failed:', err);
            if (btn) {
                btn.innerHTML = '<span>❌</span> Export failed. Please try again.';
                setTimeout(() => {
                    btn.innerHTML = origBtnHtml;
                    btn.disabled = false;
                }, 4000);
            }
            alert('Could not download passport: ' + (err.message || 'Unknown error occurred. Please try again.'));
        }
    }

    /**
     * Cross-browser download trigger for HTML5 Canvas (Chrome, Edge, Firefox, Safari, Mobile).
     */
    static triggerCanvasDownload(canvas, creature) {
        return new Promise((resolve, reject) => {
            try {
                const safeName = (creature && (creature.name || creature.creatureLabel || creature.id || 'Field_Passport'))
                    .toString()
                    .replace(/[^a-zA-Z0-9_-]/g, '_');
                const filename = `SoulSpecies_${safeName}_Field_Passport.png`;

                if (canvas.toBlob) {
                    canvas.toBlob((blob) => {
                        if (!blob) {
                            // Fallback to dataURL if toBlob returned null
                            this.downloadViaDataUrl(canvas.toDataURL('image/png'), filename);
                            resolve();
                            return;
                        }
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.style.display = 'none';
                        a.download = filename;
                        a.href = url;
                        document.body.appendChild(a);
                        a.click();
                        setTimeout(() => {
                            if (a.parentNode) a.parentNode.removeChild(a);
                            URL.revokeObjectURL(url);
                            resolve();
                        }, 300);
                    }, 'image/png', 0.95);
                } else {
                    this.downloadViaDataUrl(canvas.toDataURL('image/png'), filename);
                    resolve();
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    static downloadViaDataUrl(dataUrl, filename) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = filename;
        a.href = dataUrl;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            if (a.parentNode) a.parentNode.removeChild(a);
        }, 300);
    }

    static setButtonSuccess(btn, origHtml) {
        if (!btn) return;
        btn.innerHTML = '<span>✅</span> Download complete!';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = origHtml;
            btn.disabled = false;
        }, 3000);
    }

    /**
     * Fallback Direct Canvas Renderer with 100% resilient field handling.
     */
    static async renderFallbackPassportCanvas(creature, userPhotoDataUrl, matchPercentage) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 800;
        const height = 1060;

        canvas.width = width;
        canvas.height = height;

        // 1. Warm Ivory & Aged Cream Paper Background
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#FCF9F3');
        bgGrad.addColorStop(0.5, '#F5EBDD');
        bgGrad.addColorStop(1, '#EAD8C5');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Faint Paper Grid / Notebook lines
        ctx.strokeStyle = 'rgba(107, 73, 56, 0.045)';
        ctx.lineWidth = 1;
        for (let y = 40; y < height; y += 27) {
            ctx.beginPath();
            ctx.moveTo(30, y);
            ctx.lineTo(width - 30, y);
            ctx.stroke();
        }

        // 2. Dashed Scrapbook Paper Stitch Border
        ctx.lineWidth = 2.5;
        ctx.setLineDash([8, 6]);
        ctx.strokeStyle = '#B58B68';
        ctx.strokeRect(25, 25, width - 50, height - 50);
        ctx.setLineDash([]);

        // Inner solid border
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(48, 37, 31, 0.15)';
        ctx.strokeRect(32, 32, width - 64, height - 64);

        // Washi Tape at Top
        ctx.fillStyle = 'rgba(216, 188, 157, 0.88)';
        ctx.fillRect(width / 2 - 80, 14, 160, 24);
        ctx.strokeStyle = 'rgba(107, 73, 56, 0.25)';
        ctx.strokeRect(width / 2 - 80, 14, 160, 24);

        // 3. Card Header Banner
        ctx.fillStyle = '#A86F55';
        ctx.font = 'bold 13px "Courier Prime", monospace';
        ctx.fillText('FIELD ARCHIVE OF NON-HUMAN SPECIMENS · ENTRY NO. 402', 50, 72);

        ctx.fillStyle = '#30251F';
        ctx.font = '700 36px "Caveat", cursive';
        ctx.fillText('SoulSpecies Biometric Field Passport', 50, 112);

        // Postage Stamp in top right corner
        ctx.save();
        ctx.translate(width - 120, 80);
        ctx.rotate(-0.08);
        ctx.strokeStyle = '#A86F55';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 3]);
        ctx.strokeRect(-55, -22, 110, 44);
        ctx.setLineDash([]);
        ctx.fillStyle = '#A86F55';
        ctx.font = 'bold 12px "Courier Prime", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('★ VERIFIED ★', 0, -3);
        ctx.fillText('SPIRIT TWIN', 0, 14);
        ctx.restore();

        // 4. Photos Section (Polaroid Style Frames)
        const photoY = 145;
        const boxSize = 220;

        // User Photo Box (Polaroid 1)
        ctx.save();
        ctx.translate(60, photoY);
        ctx.rotate(-0.025);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(48, 37, 31, 0.16)';
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 6;
        ctx.fillRect(0, 0, boxSize, boxSize + 36);
        ctx.shadowColor = 'transparent';

        // Washi tape holding user polaroid
        ctx.fillStyle = 'rgba(216, 188, 157, 0.9)';
        ctx.fillRect(boxSize / 2 - 40, -10, 80, 18);

        if (userPhotoDataUrl) {
            try {
                const userImg = await this.loadImage(userPhotoDataUrl);
                ctx.drawImage(userImg, 12, 12, boxSize - 24, boxSize - 24);
            } catch (err) {
                console.warn('User photo render fallback', err);
            }
        }

        ctx.fillStyle = '#6B4938';
        ctx.font = 'bold 12px "Patrick Hand", cursive';
        ctx.textAlign = 'center';
        ctx.fillText('YOU (FIELD SKETCH)', boxSize / 2, boxSize + 24);
        ctx.restore();

        // Wax Seal DNA Badge (Center)
        ctx.save();
        ctx.translate(width / 2, photoY + boxSize / 2);
        ctx.fillStyle = '#A86F55';
        ctx.beginPath();
        ctx.arc(0, 0, 42, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🧬', 0, -10);
        ctx.font = 'bold 15px "Patrick Hand", cursive';
        ctx.fillText(`${matchPercentage || '98.5'}%`, 0, 10);
        ctx.font = 'bold 10px "Courier Prime", monospace';
        ctx.fillText('MATCH', 0, 24);
        ctx.restore();

        // Creature Avatar Box (Polaroid 2)
        const creatureX = width - 60 - boxSize;
        ctx.save();
        ctx.translate(creatureX, photoY);
        ctx.rotate(0.025);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(48, 37, 31, 0.16)';
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 6;
        ctx.fillRect(0, 0, boxSize, boxSize + 36);
        ctx.shadowColor = 'transparent';

        // Washi tape holding creature polaroid
        ctx.fillStyle = 'rgba(168, 111, 85, 0.8)';
        ctx.fillRect(boxSize / 2 - 40, -10, 80, 18);

        // Draw Creature / Twin SVG onto canvas via Image
        if (creature && creature.svg) {
            try {
                const svgDataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(creature.svg);
                const creatureImg = await this.loadImage(svgDataUri);
                ctx.drawImage(creatureImg, 12, 12, boxSize - 24, boxSize - 24);
            } catch (e) {
                console.warn('SVG render fallback', e);
            }
        }

        ctx.fillStyle = '#6B4938';
        ctx.font = 'bold 12px "Patrick Hand", cursive';
        ctx.textAlign = 'center';
        ctx.fillText('TRUE SPIRIT TWIN', boxSize / 2, boxSize + 24);
        ctx.restore();

        // 5. Creature Title & Latin/Archetype Name
        const titleY = photoY + boxSize + 70;
        ctx.textAlign = 'left';
        ctx.fillStyle = '#30251F';
        ctx.font = '700 34px "Caveat", cursive';
        ctx.fillText(creature.name || 'Your Spirit Twin', 60, titleY);

        ctx.fillStyle = '#A86F55';
        ctx.font = 'italic 17px "Lora", Georgia, serif';
        ctx.fillText(creature.latin || `${creature.creatureLabel || 'Spirit'} · ${creature.trait || 'UNIQUE'}`, 60, titleY + 26);

        // Category Tag
        ctx.fillStyle = '#6B4938';
        ctx.font = 'bold 12px "Courier Prime", monospace';
        const categoryText = (creature.category || creature.archetypeLabel || 'VERIFIED SPIRIT TWIN').toUpperCase();
        ctx.fillText(`FIELD CATEGORY: ${categoryText}`, 60, titleY + 50);

        // 6. Quote & Roast Box (Kraft Note)
        const roastY = titleY + 68;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(60, roastY, width - 120, 105);
        ctx.strokeStyle = 'rgba(107, 73, 56, 0.2)';
        ctx.strokeRect(60, roastY, width - 120, 105);
        ctx.fillStyle = '#A86F55';
        ctx.fillRect(60, roastY, 6, 105);

        ctx.fillStyle = '#A86F55';
        ctx.font = 'italic bold 15px "Lora", Georgia, serif';
        this.wrapText(ctx, creature.quote || 'Every question is a secret door waiting for someone to turn the knob.', 80, roastY + 28, width - 160, 20);

        ctx.fillStyle = '#4A3B32';
        ctx.font = '14px "Lora", Georgia, serif';
        this.wrapText(ctx, creature.roast || creature.description || 'A truly unique spirit specimen.', 80, roastY + 62, width - 160, 18);

        // 7. Field Guide Telemetry Stats Bars
        const statsY = roastY + 130;
        ctx.fillStyle = '#30251F';
        ctx.font = 'bold 16px "Patrick Hand", cursive';
        ctx.fillText('FIELD ATTRIBUTE TELEMETRY:', 60, statsY);

        const st = (creature && creature.stats) ? creature.stats : { chaos: 50, napNeed: 60, snackUrgency: 70, dramaLevel: 40, patience: 50 };
        const statsList = [
            { label: 'Chaos Energy', val: st.chaos || 50, color: '#A84F45' },
            { label: 'Nap Requirement', val: st.napNeed || 60, color: '#B58B68' },
            { label: 'Snack Urgency', val: st.snackUrgency || 70, color: '#C88A4C' },
            { label: 'Drama Factor', val: st.dramaLevel || 40, color: '#C48D80' },
            { label: 'Patience Buffer', val: st.patience || 50, color: '#7B8573' }
        ];

        statsList.forEach((stat, i) => {
            const rowY = statsY + 24 + (i * 22);
            ctx.fillStyle = '#6B4938';
            ctx.font = 'bold 11px "Courier Prime", monospace';
            ctx.fillText(stat.label, 60, rowY + 10);

            // Bar background
            ctx.fillStyle = '#EAD8C5';
            ctx.fillRect(230, rowY, 430, 10);

            // Bar fill
            ctx.fillStyle = stat.color;
            ctx.fillRect(230, rowY, Math.min(430, (430 * stat.val) / 100), 10);

            // Value
            ctx.fillStyle = '#30251F';
            ctx.font = 'bold 11px "Courier Prime", monospace';
            ctx.fillText(`${stat.val}%`, 680, rowY + 10);
        });

        // Habitat & Diet line
        const detailsY = statsY + 150;
        ctx.fillStyle = '#6B4938';
        ctx.font = 'italic 12px "Lora", Georgia, serif';
        ctx.fillText(`Natural Habitat: ${creature.habitat || creature.environment || 'Enchanted Meadow'}   |   Preferred Diet: ${creature.diet || 'Sweet nectar & warm tea'}`, 60, detailsY);

        // 8. Footer Barcode & Soul ID
        const footerY = height - 55;
        ctx.fillStyle = 'rgba(107, 73, 56, 0.2)';
        ctx.fillRect(30, footerY - 15, width - 60, 1);

        // Draw vintage faux barcode
        ctx.fillStyle = '#30251F';
        let barX = 60;
        for (let b = 0; b < 45; b++) {
            const barW = (b % 3 === 0) ? 4 : (b % 2 === 0 ? 2 : 1);
            ctx.fillRect(barX, footerY, barW, 20);
            barX += barW + 2;
        }

        const safeId = (creature && (creature.id || creature.trait || 'SPIRIT')).toString().toUpperCase();
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        ctx.fillStyle = '#6B4938';
        ctx.font = '11px "Courier Prime", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`RECORDED: ${dateStr} // SPECIMEN-ID: SS-${safeId}-${Math.floor(1000 + Math.random() * 9000)}`, width - 60, footerY + 14);

        return canvas;
    }

    static loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.onerror = (e) => reject(e);
            img.src = src;
        });
    }

    static wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        if (!text) return;
        const words = text.split(' ');
        let line = '';
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    }
}

window.cardExporter = CardExporter;
