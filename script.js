// --- CONFIGURATION ---
const CORRECT_PASSCODE = "1234"; // CHANGE YOUR PASSCODE HERE

// --- PAGE NAVIGATION ---
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');

    // Trigger confetti explosions when moving to certain pages
    if(pageNumber === 2 || pageNumber === 4) {
        triggerConfetti();
    }
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const error = document.getElementById('loginError');
    if(input === CORRECT_PASSCODE) {
        // Attempt to auto-play audio on user action
        const music = document.getElementById('bgMusic');
        music.play().catch(e => console.log("Audio waiting for explicit interaction context"));
        nextPage(2);
    } else {
        error.innerText = "Wrong code! Try '1234' 😘";
    }
}

function restartExperience() {
    document.getElementById('giftBox').classList.remove('hidden');
    document.getElementById('finalMessage').classList.add('hidden');
    nextPage(1);
}

// --- MUSIC TOGGLE ---
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    }
});

// --- CONFETTI & FIREWORKS (via canvas-confetti library) ---
function triggerConfetti() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#ff9a9e', '#fecfef', '#6c5ce7'] });
}

function triggerGiftAnimation() {
    // Continuous bursts simulating fireworks
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#fd79a8', '#6c5ce7'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#fd79a8', '#6c5ce7'] });
      if (Date.now() < end) { requestAnimationFrame(frame); }
    }());
}

function openGift() {
    document.getElementById('giftBox').classList.add('hidden');
    document.getElementById('finalMessage').classList.remove('hidden');
    
    // Massive balloon/confetti burst effect
    var end = Date.now() + (2 * 1000);
    (function loop() {
        confetti({ particleCount: 5, startTime: 0, scale: 2, spread: 90, origin: { x: Math.random(), y: Math.random() - 0.2 } });
        if (Date.now() < end) { requestAnimationFrame(loop); }
    }());
}

// --- FLOATING HEARTS BACKGROUND CANVAS ---
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

let hearts = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 12 + 6;
        this.speed = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = Math.random() > 0.5 ? '#fd79a8' : '#a1c4fd';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size * 1.1);
        ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
        ctx.fill();
        ctx.restore();
    }
    update() {
        this.y -= this.speed;
        if (this.y < -20) {
            this.y = canvas.height + 20;
            this.x = Math.random() * canvas.width;
        }
    }
}

function initHearts() {
    hearts = [];
    for (let i = 0; i < 30; i++) { hearts.push(new Heart()); }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

initHearts();
animate();
