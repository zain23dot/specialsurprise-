/* Custom Global Setup */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    background-attachment: fixed;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a154b;
}

/* Canvas Configurations */
#fireworks-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    pointer-events: none;
}

/* Page Management with Transitions */
.page {
    position: absolute;
    width: 90%;
    max-width: 600px;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 2;
    display: none;
}

.page.active {
    display: block;
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
}

/* Glassmorphism Styles */
.glass-card {
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 2.5rem;
    width: 100%;
}

.text-center { text-align: center; }

/* Dynamic Typography & Utilities */
h2 { margin-bottom: 1rem; font-size: 1.8rem; }
p { margin-bottom: 1.5rem; line-height: 1.6; }
.error { color: #d9383a; font-weight: bold; margin-top: 10px; }

/* Buttons & Soft Animations */
.btn {
    background: linear-gradient(45deg, #ff758c, #ff7eb3);
    color: white;
    border: none;
    padding: 12px 28px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 117, 140, 0.4);
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 117, 140, 0.6);
}

/* Custom Music Control Container */
.music-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff758c;
    font-size: 1.2rem;
}

/* Input Fields */
input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 20px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.6);
    outline: none;
    text-align: center;
    font-size: 1.1rem;
    color: #4a154b;
}

/* Gift Box Animations */
#gift-box {
    width: 120px;
    height: 120px;
    margin: 30px auto;
    position: relative;
    cursor: pointer;
    animation: bounce 2s infinite;
}

.gift-container {
    font-size: 80px;
    color: #9b5de5;
    position: absolute;
    bottom: 0;
    width: 100%;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}

.hidden { display: none; }

/* Grid Sections */
.section-title {
    text-align: center;
    color: #5e17eb;
    margin-bottom: 20px;
    font-size: 2rem;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 20px;
}

.grid-box {
    padding: 1.5rem !important;
    text-align: center;
}

.grid-box i { font-size: 2rem; margin-bottom: 10px; }
.icon-pink { color: #ff758c; }
.icon-purple { color: #9b5de5; }
.grid-box h3 { font-size: 1.1rem; margin-bottom: 5px; }
.grid-box p { font-size: 0.85rem; margin-bottom: 0; }
.grid-nav-btn { display: block; margin: 0 auto; }

/* Image Slider styles */
.slider {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 20px;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.slide.active { opacity: 1; }
.slide img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 15px;
}

.slide-caption {
    margin-top: 10px;
    font-style: italic;
    font-size: 0.95rem;
}

.slide-btn {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.6);
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 50%;
    color: #4a154b;
}

.prev { left: 10px; }
.next { right: 10px; }

/* Floating Hearts Elements */
.hearts-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 0;
}

.heart-particle {
    position: absolute;
    bottom: -20px;
    color: rgba(255, 117, 140, 0.6);
    animation: floatUp 6s linear infinite;
}

@keyframes floatUp {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-105vh) rotate(360deg); opacity: 0; }
}

/* Balloons elements setup */
.balloon-zone { position: relative; width: 100%; height: 0; }
.balloon {
    position: fixed;
    bottom: -100px;
    width: 50px;
    height: 65px;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    animation: flyUp 7s ease-in infinite;
    z-index: 5;
}

@keyframes flyUp {
    0% { transform: translateY(0) translateX(0); opacity: 1; }
    100% { transform: translateY(-120vh) translateX(50px); opacity: 0; }
}

/* Mobile Responsiveness Rules */
@media(max-width: 600px) {
    .grid-container { grid-template-columns: 1fr; }
    .glass-card { padding: 1.5rem; }
    h2 { font-size: 1.4rem; }
}
