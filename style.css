// CONFIGURATION: Set your custom passcode here!
const SECRET_PASSCODE = "1204"; // <-- CHANGE THIS to your desired passcode

// Global Page Transitions Setup
function nextPage(pageNum) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    setTimeout(() => {
        const nextTarget = document.getElementById(`page-${pageNum}`);
        if(nextTarget) {
            nextTarget.style.display = 'block';
            setTimeout(() => nextTarget.classList.add('active'), 50);
        }
    }, 400);
}

// Page 1: Passcode Verification
function checkPasscode() {
    const entered = document.getElementById('passcode-input').value;
    if(entered === SECRET_PASSCODE) {
        nextPage(2);
        startMusic();
        triggerConfetti();
    } else {
        document.getElementById('error-msg').innerText = "Incorrect passcode! Try again, love. ❤️";
    }
}

// Audio Engine Controls
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

function startMusic() {
    audio.play().catch(() => console.log("Audio awaiting gesture setup."));
}

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        audio.pause();
        musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

// Page 2: Gift Reveal Box & Typewriter Animation
function openGift() {
    const giftBox = document.getElementById('gift-box');
    giftBox.style.transform = "scale(0)";
    setTimeout(() => {
        giftBox.style.display = 'none';
        document.getElementById('gift-message').classList.remove('hidden');
        triggerConfetti();
        startTypewriter();
    }, 500);
}

function startTypewriter() {
    const text = "To the most incredible soul in the universe... Happy Birthday! Today is all about you, and I wanted to wrap all my love up into this little digital space. Let's look back at our journey... ✨";
    let i = 0;
    const speed = 45; 
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Page 4: Photo Gallery Engine
let currentSlideIdx = 0;
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlideIdx].classList.remove('active');
    currentSlideIdx = (currentSlideIdx + direction + slides.length) % slides.length;
    slides[currentSlideIdx].classList.add('active');
}

// Core Special Effects Engines: Floating Ambient Hearts
function initFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartsSymbols = ['❤️', '💖', '💕', '🔮', '✨'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 15 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        heart.innerText = heartsSymbols[Math.floor(Math.random() * heartsSymbols.length)];
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }, 450);
}
initFloatingHearts();

// Special Effects Engines: Active Confetti Bursts
function triggerConfetti() {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: ['#ff758c', '#9b5de5', '#ff7eb3', '#ffffff'] });
}

// Special Effects Engines: Mass Dynamic Balloons Generator
function triggerMassBalloons() {
    const colors = ['#ff758c', '#ff7eb3', '#9b5de5', '#b5179e', '#f72585'];
    for(let i=0; i<25; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = Math.random() * 90 + 'vw';
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDuration = Math.random() * 3 + 5 + 's';
            document.body.appendChild(balloon);
            setTimeout(() => balloon.remove(), 8000);
        }, i * 150);
    }
}

// Special Effects Engines: Vector Particle Fireworks System
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
let fireworks = [];

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class FireworkParticle {
    constructor(x, y, color) {
        this.x = x; this.y = y; this.color = color;
        this.radius = Math.random() * 2 + 1;
        this.velocity = { x: (Math.random() - 0.5) * 6, y: (Math.random() - 0.5) * 6 };
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.015;
    }
    draw() {
        ctx.save(); ctx.globalAlpha = this.alpha; ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color; ctx.fill(); ctx.restore();
    }
    update() {
        this.x += this.velocity.x; this.y += this.velocity.y;
        this.velocity.y += 0.04; // Simulated Gravity
        this.alpha -= this.decay;
    }
}

function spawnFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.6);
    const colors = ['#ff758c', '#9b5de5', '#ffec99', '#a6c1ee'];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 40; i++) fireworks.push(new FireworkParticle(x, y, chosenColor));
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks = fireworks.filter(p => p.alpha > 0);
    fireworks.forEach(p => { p.update(); p.draw(); });
    if(Math.random() < 0.04 && document.getElementById('page-5').classList.contains('active')) spawnFirework();
    requestAnimationFrame(animateFireworks);
}
animateFireworks();
