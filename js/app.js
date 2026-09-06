// SoulSpecies Main Application Controller
// Orchestrates views, camera, quiz engine, sound synthesis, and result reveal

class SoulSpeciesApp {
    constructor() {
        this.currentView = 'hero-view';
        this.userPhoto = null;
        this.biometricSeed = {};
        this.selectedQuizMode = 'quick'; // 'quick' (6) or 'full' (16)
        this.activeResult = null;
    }

    init() {
        // Initialize camera scanner elements
        const videoEl = document.getElementById('camera-video');
        const canvasEl = document.getElementById('snapshot-canvas');
        window.cameraScanner.init(videoEl, canvasEl);

        // Pre-populate result screen so the "TRUE SPIRIT TWIN" box is NEVER empty
        this.prepopulateDefaultTwin();

        // Bind DOM event listeners
        this.bindEvents();

        // Render showcase previews on hero
        this.renderHeroShowcase();

        // Render codex gallery
        this.renderCodexGallery();
    }

    prepopulateDefaultTwin() {
        if (!window.TwinGenerator) return;
        const initialTwin = window.TwinGenerator.generate({ curious: 5, playful: 3 }, { seed: 42 });
        this.activeTwin = initialTwin;
        const creatureBox = document.getElementById('result-creature-svg-wrap');
        if (creatureBox && !creatureBox.querySelector('svg')) {
            creatureBox.innerHTML = initialTwin.svg;
        }
        const twinBox = document.getElementById('twin-svg-container');
        if (twinBox && !twinBox.querySelector('svg')) {
            twinBox.innerHTML = initialTwin.svg;
        }
        if (!this.userPhoto) {
            this.userPhoto = window.cameraScanner.useDemoSelfie();
            const userPhotoEl = document.getElementById('result-user-photo');
            if (userPhotoEl && !userPhotoEl.src) {
                userPhotoEl.src = this.userPhoto;
            }
        }
    }

    bindEvents() {
        // Navigation clicks
        document.getElementById('nav-brand').addEventListener('click', () => {
            window.soundEngine.playPop();
            this.showView('hero-view');
        });

        document.getElementById('btn-explore-codex').addEventListener('click', () => {
            window.soundEngine.playPop();
            this.showView('codex-view');
        });

        document.getElementById('btn-back-from-codex').addEventListener('click', () => {
            window.soundEngine.playPop();
            this.showView('hero-view');
        });

        // Audio Mute Toggle
        const soundBtn = document.getElementById('btn-toggle-sound');
        soundBtn.addEventListener('click', () => {
            const isMuted = window.soundEngine.toggleMute();
            soundBtn.innerHTML = isMuted ? '🔇' : '🔊';
            if (!isMuted) window.soundEngine.playPop();
        });

        // Quiz Mode Pills
        document.querySelectorAll('.mode-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                window.soundEngine.playPop();
                document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.selectedQuizMode = pill.dataset.mode;
                window.quizEngine.setMode(this.selectedQuizMode);
            });
        });

        // Hero CTA "Start Biometric Scan"
        document.getElementById('btn-start-experience').addEventListener('click', async () => {
            window.soundEngine.playPop();
            window.quizEngine.setMode(this.selectedQuizMode);
            this.showView('scanner-view');
            
            // Try starting camera
            const res = await window.cameraScanner.startCamera();
            if (res.success) {
                window.soundEngine.playScanSweep();
            }
        });

        // Scanner Snap Photo
        document.getElementById('btn-capture-photo').addEventListener('click', () => {
            window.soundEngine.playShutter();
            this.userPhoto = window.cameraScanner.captureSnapshot();
            this.biometricSeed = window.cameraScanner.biometricData;
            this.startQuiz();
        });

        // Scanner File Upload Trigger
        const fileInput = document.getElementById('file-upload-input');
        document.getElementById('btn-upload-photo').addEventListener('click', () => {
            window.soundEngine.playPop();
            fileInput.click();
        });

        fileInput.addEventListener('change', async (e) => {
            if (e.target.files && e.target.files[0]) {
                window.soundEngine.playShutter();
                try {
                    this.userPhoto = await window.cameraScanner.handleFileUpload(e.target.files[0]);
                    this.biometricSeed = window.cameraScanner.biometricData;
                    this.startQuiz();
                } catch (err) {
                    alert('Could not read image file. Please try another.');
                }
            }
        });

        // Demo Selfie
        document.getElementById('btn-use-demo-selfie').addEventListener('click', () => {
            window.soundEngine.playPop();
            this.userPhoto = window.cameraScanner.useDemoSelfie();
            this.biometricSeed = window.cameraScanner.biometricData;
            this.startQuiz();
        });

        // Result: Download Spirit Card
        const downloadBtn = document.getElementById('btn-download-card');
        downloadBtn.addEventListener('click', async () => {
            window.soundEngine.playPop();
            const exportTarget = this.activeTwin || (this.activeResult ? this.activeResult.creature : null);
            if (exportTarget) {
                await window.cardExporter.generateAndDownload(
                    exportTarget,
                    this.userPhoto,
                    this.activeResult ? this.activeResult.matchPercentage : '98.5',
                    this.activeResult ? this.activeResult.answersCount : 6,
                    downloadBtn
                );
            }
        });

        // Result: Play Creature Sound
        document.getElementById('btn-creature-voice').addEventListener('click', () => {
            if (this.activeTwin) {
                window.soundEngine.playCreatureSound(this.activeTwin.trait);
            } else if (this.activeResult) {
                window.soundEngine.playCreatureSound(this.activeResult.creature.id);
            }
        });

        // Result: Retake
        document.getElementById('btn-restart').addEventListener('click', () => {
            window.soundEngine.playPop();
            window.quizEngine.reset();
            this.showView('hero-view');
        });
    }

    showView(viewId) {
        document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
            this.currentView = viewId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    renderHeroShowcase() {
        const showcaseEl = document.getElementById('hero-showcase-carousel');
        if (!showcaseEl) return;

        // Display sample featured cartoons
        const featuredIds = ['goose', 'sloth', 'espresso', 'capybara', 'raccoon', 'retriever'];
        showcaseEl.innerHTML = featuredIds.map(id => {
            const c = getCreatureById(id);
            return `
                <div class="showcase-item" data-id="${c.id}" onclick="window.soundEngine.playCreatureSound('${c.id}')">
                    ${c.svg}
                    <span class="showcase-label">${c.name.split(' ')[1] || c.name}</span>
                </div>
            `;
        }).join('');
    }

    startQuiz() {
        window.quizEngine.reset();
        this.showView('quiz-view');
        this.renderCurrentQuestion();
    }

    renderCurrentQuestion() {
        const q = window.quizEngine.getCurrentQuestion();
        if (!q) {
            this.synthesizeResult();
            return;
        }

        const progress = window.quizEngine.getProgress();
        document.getElementById('quiz-progress-fill').style.width = `${progress.percentage}%`;
        document.getElementById('quiz-counter').textContent = `Question ${progress.current} of ${progress.total}`;
        document.getElementById('quiz-topic').innerHTML = `${q.icon} ${q.topic}`;
        document.getElementById('quiz-question').textContent = q.question;

        const optionsContainer = document.getElementById('quiz-options-container');
        optionsContainer.innerHTML = q.options.map((opt, idx) => `
            <div class="quiz-option-card" data-idx="${idx}">
                <div class="option-letter">${opt.letter}</div>
                <div class="option-text">${opt.text}</div>
            </div>
        `).join('');

        // Bind clicks to options
        optionsContainer.querySelectorAll('.quiz-option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const idx = parseInt(card.dataset.idx, 10);
                window.soundEngine.playChirp();
                
                // Visual click feedback
                card.style.transform = 'scale(0.98)';
                card.style.borderColor = 'var(--c-terracotta)';
                card.style.backgroundColor = 'var(--c-parchment)';
                
                setTimeout(() => {
                    window.quizEngine.recordAnswer(idx, this.biometricSeed);
                    if (window.quizEngine.isComplete()) {
                        this.synthesizeResult();
                    } else {
                        this.renderCurrentQuestion();
                    }
                }, 220);
            });
        });
    }

    synthesizeResult() {
        this.showView('synth-view');
        window.soundEngine.playScanSweep();

        const messages = [
            "Analyzing your snooze button frequency...",
            "Measuring couch-potato aura in your facial scan...",
            "Scanning late-night kitchen raid patterns...",
            "Cross-referencing 15 non-human spirit entities...",
            "Spirit entity detected! Generating official passport..."
        ];

        let step = 0;
        const statusEl = document.getElementById('synth-status-text');

        const interval = setInterval(() => {
            step++;
            if (step < messages.length) {
                statusEl.textContent = messages[step];
                window.soundEngine.playScanSweep();
            } else {
                clearInterval(interval);
                this.revealResult();
            }
        }, 600);
    }

    revealResult() {
        // 1. Calculate personality result
        this.activeResult = window.quizEngine.calculateResult(this.biometricSeed);

        // 2. Generate personalized Fantasy Spirit Twin from actual tally + seed
        const tally = window.quizEngine.tally || {};
        const seed  = this.biometricSeed || {};
        const twin  = window.TwinGenerator.generate(tally, seed);
        this.activeTwin = twin;
        this.activeResult.creature = twin;

        // Play celebration fanfare and audio
        window.soundEngine.playFanfare();
        setTimeout(() => {
            window.soundEngine.playChirp();
        }, 700);

        // Ensure userPhoto has valid fallback
        if (!this.userPhoto) {
            this.userPhoto = window.cameraScanner.useDemoSelfie();
        }
        const userPhotoEl = document.getElementById('result-user-photo');
        if (userPhotoEl) {
            userPhotoEl.src = this.userPhoto;
        }

        // 3. CRITICAL BUG FIX: RENDER THE GENERATED TWIN SVG INTO THE "TRUE SPIRIT TWIN" POLAROID!
        const creatureBox = document.getElementById('result-creature-svg-wrap');
        if (creatureBox) {
            creatureBox.innerHTML = twin.svg;
        }

        // 4. Populate Match Percentage
        const matchEl = document.getElementById('result-match-pct');
        if (matchEl) {
            matchEl.textContent = `${this.activeResult.matchPercentage}%`;
        }

        // 5. Populate Certificate Titles & Data with Twin's unique identity
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('result-creature-name',     twin.name);
        set('result-creature-latin',    twin.latin);
        set('result-creature-category', twin.category);
        set('result-creature-quote',    `"${twin.quote}"`);
        set('result-creature-roast',    twin.roast);
        set('result-habitat',           twin.habitat);
        set('result-diet',              twin.diet);

        // 6. Render Stats Bars in Scrapbook Earthy Palette based on Twin stats
        const statsConfig = [
            { id: 'chaos', name: 'Chaos Energy', val: twin.stats.chaos, color: '#A84F45' },
            { id: 'napNeed', name: 'Nap Requirement', val: twin.stats.napNeed, color: '#B58B68' },
            { id: 'snackUrgency', name: 'Snack Urgency', val: twin.stats.snackUrgency, color: '#C88A4C' },
            { id: 'dramaLevel', name: 'Drama Factor', val: twin.stats.dramaLevel, color: '#C48D80' },
            { id: 'patience', name: 'Patience Buffer', val: twin.stats.patience, color: '#7B8573' }
        ];

        const statsContainer = document.getElementById('result-stats-container');
        if (statsContainer) {
            statsContainer.innerHTML = statsConfig.map(s => `
                <div class="stat-row">
                    <div class="stat-name">${s.name}</div>
                    <div class="stat-bar-track">
                        <div class="stat-bar-fill" style="width: 0%; background: ${s.color};" data-target="${s.val}%"></div>
                    </div>
                    <div class="stat-val-text">${s.val}%</div>
                </div>
            `).join('');
        }

        // 7. Also Populate the Profile Section below Certificate
        const twinSvgBox = document.getElementById('twin-svg-container');
        if (twinSvgBox) {
            twinSvgBox.innerHTML = twin.svg;
        }
        set('twin-name',           twin.name);
        set('twin-creature-label', twin.creatureLabel);
        set('twin-trait',          twin.trait);
        set('twin-description',    twin.description);
        set('twin-palette',        twin.palette);
        set('twin-outfit',         twin.outfit);
        set('twin-environment',    twin.environment);
        set('twin-pose',           twin.pose.charAt(0).toUpperCase() + twin.pose.slice(1));

        // Highlight matched species in the SoulSpecies Field Archive
        if (window.FieldArchive && twin.traitKey) {
            window.FieldArchive.highlightMatch(twin.traitKey);
        }

        this.showView('result-view');

        // Animate stat bars in smoothly
        setTimeout(() => {
            document.querySelectorAll('.stat-bar-fill').forEach(fill => {
                fill.style.width = fill.dataset.target;
            });
        }, 200);

        // Animate twin section entrance
        const section = document.getElementById('twin-reveal-section');
        if (section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(24px)';
            setTimeout(() => {
                section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 400);
        }
    }

    renderCodexGallery() {
        if (window.FieldArchive) {
            window.FieldArchive.render();
            window.FieldArchive.init();
        }
    }
}

// Boot on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SoulSpeciesApp();
    window.app.init();
});
