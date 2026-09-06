// SoulSpecies Biometric Camera & Face Scanner Engine
// Handles Webcam, Photo Upload, Interactive Cyber-HUD, and Funny Biometric Telemetry

class CameraScanner {
    constructor() {
        this.videoElement = null;
        this.canvasElement = null;
        this.stream = null;
        this.capturedImageData = null;
        this.telemetryInterval = null;
        this.biometricData = {
            laziness: 85,
            chaos: 60,
            snackUrgency: 92,
            caffeineNeed: 78,
            patience: 10,
            seed: 42
        };
    }

    init(videoEl, canvasEl) {
        this.videoElement = videoEl;
        this.canvasElement = canvasEl;
    }

    async startCamera() {
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                this.stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: 640 },
                        height: { ideal: 640 },
                        facingMode: 'user'
                    },
                    audio: false
                });

                if (this.videoElement) {
                    this.videoElement.srcObject = this.stream;
                    await this.videoElement.play();
                    this.startTelemetryLoop();
                    return { success: true };
                }
            }
            throw new Error('Camera not supported');
        } catch (err) {
            console.warn('Camera access unavailable or denied:', err);
            return {
                success: false,
                error: err.name || 'Camera unavailable'
            };
        }
    }

    stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        if (this.telemetryInterval) {
            clearInterval(this.telemetryInterval);
            this.telemetryInterval = null;
        }
    }

    startTelemetryLoop() {
        const metrics = [
            { label: 'Nap Urgency', min: 82, max: 99, suffix: '% (Critical)' },
            { label: 'Snack Gravity', min: 75, max: 98, suffix: '% (High Pull)' },
            { label: 'Chaos Radiation', min: 65, max: 97, suffix: '% (Unhinged)' },
            { label: 'Caffeine Deficit', min: 70, max: 99, suffix: '% (Emergency)' },
            { label: 'Patience Buffer', min: 0, max: 12, suffix: '% (404 Not Found)' }
        ];

        const telemetryEl = document.getElementById('scanner-telemetry');
        if (!telemetryEl) return;

        this.telemetryInterval = setInterval(() => {
            const m = metrics[Math.floor(Math.random() * metrics.length)];
            const val = Math.floor(Math.random() * (m.max - m.min + 1)) + m.min;
            telemetryEl.innerHTML = `
                <div class="telemetry-item animate-telemetry">
                    <span class="telemetry-label">${m.label}:</span>
                    <span class="telemetry-val">${val}${m.suffix}</span>
                </div>
            `;
        }, 1200);
    }

    captureSnapshot() {
        if (!this.canvasElement) return null;
        const ctx = this.canvasElement.getContext('2d');
        const width = 320;
        const height = 320;

        this.canvasElement.width = width;
        this.canvasElement.height = height;

        if (this.videoElement && this.videoElement.videoWidth) {
            // Draw cropped centered square from video feed
            const vw = this.videoElement.videoWidth;
            const vh = this.videoElement.videoHeight;
            const size = Math.min(vw, vh);
            const sx = (vw - size) / 2;
            const sy = (vh - size) / 2;

            ctx.drawImage(this.videoElement, sx, sy, size, size, 0, 0, width, height);
            
            // Analyze brightness for biometric seed
            try {
                const imgData = ctx.getImageData(0, 0, width, height);
                let totalLight = 0;
                for (let i = 0; i < imgData.data.length; i += 40) {
                    totalLight += (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                }
                const avgBrightness = totalLight / (imgData.data.length / 40);
                this.biometricData.seed = Math.round(avgBrightness);
                this.biometricData.laziness = Math.min(99, Math.max(50, Math.round(100 - avgBrightness * 0.3)));
                this.biometricData.chaos = Math.min(99, Math.max(40, Math.round(avgBrightness * 0.45)));
            } catch (e) {
                this.biometricData.seed = Math.floor(Math.random() * 100);
            }
        } else {
            // Fallback generated playful face
            this.generateDemoAvatar(ctx, width, height);
        }

        this.capturedImageData = this.canvasElement.toDataURL('image/png');
        this.stopCamera();
        return this.capturedImageData;
    }

    handleFileUpload(file) {
        return new Promise((resolve, reject) => {
            if (!file || !file.type.startsWith('image/')) {
                reject(new Error('Please upload a valid image file'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const ctx = this.canvasElement.getContext('2d');
                    const size = 320;
                    this.canvasElement.width = size;
                    this.canvasElement.height = size;

                    // Crop centered square
                    const minDim = Math.min(img.width, img.height);
                    const sx = (img.width - minDim) / 2;
                    const sy = (img.height - minDim) / 2;

                    ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
                    this.capturedImageData = this.canvasElement.toDataURL('image/png');
                    this.biometricData.seed = Math.floor(Math.random() * 100);
                    resolve(this.capturedImageData);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    useDemoSelfie() {
        if (!this.canvasElement) return null;
        const ctx = this.canvasElement.getContext('2d');
        const size = 320;
        this.canvasElement.width = size;
        this.canvasElement.height = size;
        this.generateDemoAvatar(ctx, size, size);
        this.capturedImageData = this.canvasElement.toDataURL('image/png');
        return this.capturedImageData;
    }

    generateDemoAvatar(ctx, w, h) {
        // Aesthetic cute doodle face for demo
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, '#6c5ce7');
        gradient.addColorStop(1, '#ff7675');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);

        // Cartoon Head
        ctx.fillStyle = '#ffeaa7';
        ctx.strokeStyle = '#2d3436';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, 90, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Messy Hair Doodle
        ctx.fillStyle = '#2d3436';
        ctx.beginPath();
        ctx.arc(w / 2, h / 2 - 35, 95, Math.PI * 1.1, Math.PI * 1.9);
        ctx.fill();

        // Round Cartoon Glasses
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.strokeStyle = '#2d3436';
        ctx.lineWidth = 5;
        
        ctx.beginPath();
        ctx.arc(w / 2 - 35, h / 2 - 5, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(w / 2 + 35, h / 2 - 5, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Bridge
        ctx.beginPath();
        ctx.moveTo(w / 2 - 9, h / 2 - 5);
        ctx.lineTo(w / 2 + 9, h / 2 - 5);
        ctx.stroke();

        // Eyes
        ctx.fillStyle = '#2d3436';
        ctx.beginPath();
        ctx.arc(w / 2 - 35, h / 2 - 5, 7, 0, Math.PI * 2);
        ctx.arc(w / 2 + 35, h / 2 - 5, 7, 0, Math.PI * 2);
        ctx.fill();

        // Smile
        ctx.strokeStyle = '#2d3436';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2 + 25, 22, 0.2, Math.PI - 0.2);
        ctx.stroke();

        // Cheeks
        ctx.fillStyle = '#ff7675';
        ctx.beginPath();
        ctx.arc(w / 2 - 55, h / 2 + 20, 10, 0, Math.PI * 2);
        ctx.arc(w / 2 + 55, h / 2 + 20, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.cameraScanner = new CameraScanner();
