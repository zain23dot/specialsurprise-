/* ==========================================================================
   1. CUSTOM GLOBAL SETUP & THEMING
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #0f0c20 0%, #1b102f 50%, #2a0825 100%);
    background-attachment: fixed;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}

/* ==========================================================================
   2. CANVAS & GLOBAL FLOATING ANIMATIONS
   ========================================================================== */
#fireworks-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    pointer-events: none;
}

.hearts-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 2;
}

.heart-particle {
    position: absolute;
    bottom: -30px;
    color: #ff65a3;
    filter: drop-shadow(0 0 5px rgba(255, 101, 163, 0.6));
    animation: floatUp 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes floatUp {
    0% { transform: translateY(0) scale(0.5) rotate(0deg); opacity: 0; }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% { transform: translateY(-110vh) scale(1.2) rotate(360deg); opacity: 0; }
}

.balloon-zone {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
}

.balloon {
    position: absolute;
    bottom: -120px;
    width: 60px;
    height: 75px;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    animation: flyUp 6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}

.balloon::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid currentColor;
}

@keyframes flyUp {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 0.9; }
    100% { transform: translateY(-120vh) rotate(15deg); opacity: 0; }
}

/* ==========================================================================
   3. PAGE MANAGEMENT (PREMIUM TRANSITIONS)
   ========================================================================== */
.page {
    position: absolute;
    width: 90%;
    max-width: 600px;
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 5;
    display: none;
}

.page.active {
    display: block;
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
}

/* ==========================================================================
   4. ULTRA-PREMIUM GLASSMORPHISM
   ========================================================================== */
.glass-card {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 3rem;
    width: 100%;
    transition: box-shadow 0.4s ease, border-color 0.4s ease;
}

.glass-card:hover {
    box-shadow: 0 12px 40px 0 rgba(255, 101, 163, 0.25);
    border-color: rgba(255, 101, 163, 0.4);
}

.text-center { text-align: center; }

/* ==========================================================================
   5. DYNAMIC TYPOGRAPHY & INTERACTIVE BUTTONS
   ========================================================================== */
h2 { 
    margin-bottom: 1rem; 
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.5px;
}

p { 
    margin-bottom: 1.5rem; 
    line-height: 1.7;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.85);
}

.title-text, .section-title, .shimmer-text {
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    background: linear-gradient(to right, #ff6b6b, #ff8e53, #ef476f, #ff6b6b);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine-text 3s linear infinite;
    margin-bottom: 1.5rem;
}

@keyframes shine-text {
    to { background-position: 200% center; }
}

.error { 
    color: #ff4a4a; 
    font-weight: 600; 
    margin-top: 12px;
    min-height: 24px;
    font-size: 0.95rem;
}

.btn {
    background: linear-gradient(45deg, #ff65a3, #7a42f4);
    color: white;
    border: none;
    padding: 14px 32px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 101, 163, 0.4);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.btn:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 8px 25px rgba(255, 101, 163, 0.6);
}

.btn:active {
    transform: translateY(1px);
}

/* ==========================================================================
   6. SECURITY / PASSCODE INTERFACE
   ========================================================================== */
.lock-icon {
    font-size: 3.5rem;
    color: #ff65a3;
    margin-bottom: 1.5rem;
    animation: heartbeat 1.5s infinite ease-in-out;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); filter: drop-shadow(0 0 10px rgba(255, 101, 163, 0.6)); }
}

input[type="password"] {
    width: 100%;
    padding: 14px 24px;
    margin-bottom: 20px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    outline: none;
    text-align: center;
    font-size: 1.1rem;
    color: white;
    transition: all 0.3s ease;
}

input[type="password"]:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: #ff65a3;
    box-shadow: 0 0 15px rgba(255, 101, 163, 0.4);
}

/* ==========================================================================
   7. INTERACTIVE DEVICE MUSIC ELEMENT
   ========================================================================== */
.music-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.music-btn.playing {
    background: #ff65a3;
    border-color: transparent;
    animation: pulse-music 1.5s infinite alternate;
}

@keyframes pulse-music {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); box-shadow: 0 0 15px #ff65a3; }
}

/* ==========================================================================
   8. GIFT OPENING INFRASTRUCTURE
   ========================================================================== */
#gift-box {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 40px auto;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
}

#gift-box:hover {
    transform: scale(1.08) rotate(3deg);
}

.gift-lid {
    position: absolute;
    top: 0;
    left: -5px;
    width: 150px;
    height: 35px;
    background: #ff477e;
    border-radius: 5px;
    z-index: 10;
    box-shadow: 0 4px 5px rgba(0,0,0,0.3);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s;
    transform-origin: bottom left;
}

.gift-box-body {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140px;
    height: 110px;
    background: #ee2e63;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2);
}

.gift-box-body::before, .gift-lid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 100%;
    background: #ffb703;
}

#gift-box.open .gift-lid {
    transform: translate(-40px, -60px) rotate(-45deg);
    opacity: 0;
}

#gift-box.open {
    animation: explode-box 0.4s forwards ease-in;
}

@keyframes explode-box {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
}

.hidden { display: none !important; }

.fade-in {
    animation: frameFadeIn 1s forwards cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes frameFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   9. GRID REASONS COMPONENT
   ========================================================================== */
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 25px 0;
}

.grid-box {
    padding: 2rem !important;
    text-align: center;
}

.grid-box i { 
    font-size: 2.2rem; 
    margin-bottom: 12px; 
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));
}

.icon-pink { color: #ff65a3; }
.icon-purple { color: #a6c1ee; }
.grid-box h3 { font-size: 1.2rem; margin-bottom: 8px; font-weight: 600; }
.grid-box p { font-size: 0.9rem; margin-bottom: 0; color: rgba(255,255,255,0.8); }
.grid-nav-btn { display: inline-flex; margin: 0 auto; }

/* ==========================================================================
   10. PREMIUM MEMORY IMAGE SLIDER
   ========================================================================== */
.slider {
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
    border-radius: 20px;
    margin: 25px 0;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    display: flex;
    flex-direction: column;
}

.slide.active { opacity: 1; }

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-caption {
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
    width: 100%;
    padding: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    margin-bottom: 0;
}

.slide-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 12px 16px;
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 50%;
    color: white;
    z-index: 10;
    transition: background 0.3s, transform 0.2s;
}

.slide-btn:hover { 
    background: #ff65a3; 
    border-color: transparent;
    transform: translateY(-50%) scale(1.1);
}

.prev { left: 15px; }
.next { right: 15px; }

/* ==========================================================================
   11. FINAL SURPRISE & LETTER
   ========================================================================== */
.final-letter {
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 25px 0;
    font-style: italic;
    font-weight: 300;
}

.interactive-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

/* ==========================================================================
   12. MOBILE RESPONSIVENESS RULES
   ========================================================================== */
@media(max-width: 600px) {
    .grid-container { grid-template-columns: 1fr; gap: 15px; }
    .glass-card { padding: 2rem 1.5rem; }
    .title-text, .section-title, .shimmer-text { font-size: 2.3rem; }
    h2 { font-size: 1.5rem; }
    .slider { height: 240px; }
    .interactive-buttons { flex-direction: column; }
    .interactive-buttons .btn { width: 100%; justify-content: center; }
}
