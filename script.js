// Step Control Logic
function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.getElementById('step' + stepNumber).classList.add('active');
    
    // Trigger specific animations based on step
    if (stepNumber === 4) startScanning();
    if (stepNumber === 8) startEmotionalTypewriter();
    if (stepNumber === 15) startCountdown();
}

// Step 1, 2, 3: Password Logic
let tries = 0;
function checkPassword() {
    const pass = document.getElementById('passwordInput').value;
    const msg = document.getElementById('gatekeeper-msg');
    const hint = document.getElementById('hintText');
    tries++;

    if (pass === "Butkiii") {
        msg.innerText = "Access Granted! Loading...";
        setTimeout(() => nextStep(4), 1500);
    } else {
        if (tries === 1) msg.innerText = "Tu Butkii nahi hai! Chal bahar nikal!";
        else if (tries === 2) msg.innerText = "Panda ko bta rha koi or ghus rha h buktiii nahi";
        else if (tries >= 3) hint.classList.remove('hidden');
    }
}

// Step 4: Scanning Animation
function startScanning() {
    const bar = document.querySelector('.progress-fill');
    const details = document.getElementById('scanDetails');
    let width = 0;
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            document.body.classList.add('pink-mode');
            setTimeout(() => nextStep(6), 1000);
        } else {
            width++;
            bar.style.width = width + '%';
            if (width === 30) details.innerText = "Checking height... [Short Detected]";
            if (width === 70) details.innerText = "Checking ego... [High Detected]";
        }
    }, 50);
}

// Step 6: The Trap
function moveNoButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function trapSuccess() {
    document.getElementById('taraAudio').play();
    nextStep(7);
}

// Step 8: Typewriter for Emotional Shift
function startEmotionalTypewriter() {
    const text = "i know aaj ka din teko psnd nhi phir bhi kuch special he hua tha aaj se 20 saal phle haina ?";
    typeWriter("emotionalMsg", text, 50, () => {
        document.getElementById('btn8').classList.remove('hidden');
    });
}

// Step 12: Gift Explosion (Simplified with CSS Glow)
function explodeGift() {
    document.getElementById('giftBox').classList.add('hidden');
    document.getElementById('birthdayWishes').classList.remove('hidden');
    // Note: In real setup, you can add JS Confetti library here
}

// Step 13: 3D Photo Album
let currentPage = 1;
function flipPage() {
    if (currentPage < 10) {
        currentPage++;
        document.getElementById('albumImg').src = `ps${currentPage}.jpg`;
        const book = document.getElementById('book');
        book.style.transform = "rotateY(-20deg) scale(1.1)";
        setTimeout(() => book.style.transform = "rotateY(0deg)", 300);
    } else {
        nextStep(14);
    }
}

// Step 14: Lifafa
function openLetter() {
    document.querySelector('.letter').style.bottom = "120px";
    document.querySelector('.letter').style.zIndex = "10";
}

// Step 15: Fireworks (Basic Canvas Simulation)
function startCountdown() {
    let count = 5;
    const timer = setInterval(() => {
        document.getElementById('countdown').innerText = count;
        if (count === 0) {
            clearInterval(timer);
            document.getElementById('countdown').classList.add('hidden');
            document.getElementById('nameGlow').classList.remove('hidden');
            // Fireworks simulation would go here
            setTimeout(() => nextStep(16), 5000);
        }
        count--;
    }, 1000);
}

// Step 16: The Soul Message
const fullMessage = `Mujhe pata hai humare beech aaj‑kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se… aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga jo mere saath 1.5 saal tak chalega.

Aur haan yaar… 1.5 saal ho gaye, pata hi nahi chala.
Tujhe wo date yaad hai? June 17 — jab tu mujhe mili thi, jab humari baatein start hui thi. Vese bhi ye message mai teko ek mahine bad tere birthday pr de rha hunga  14 january jis date ka muje bht intzar rhta h us din koi esha aya tha jisse m bht pyar krta hu

Wo song yaad hai tujhe? Ruk… uski kuch lines aaj bhi mujhe yaad hain:
“Haan, maanga jo mera hai, jaata kya tera hai? Maine kaun si tujhse jannat maang li? Kaisa Khuda hai tu, bas naam ka hai tu Rabba, jo teri itni si bhi na chali”
Ye lines aaj tak mere saath hain, shayad kabhi bhool bhi nahi paunga.

 

Sach bolun, mujhe kaafi options mile the... Or vo  Sejal 😂
Uski wajah se kitne kalesh hue the humare beech. Tu bahut gussa hui thi, aur tujhe manane mein maine bhi bahut papad bele the 😅

Par phir bhi main tujhse alag nahi ho paaya. Pata nahi tere andar aisa kya tha jo mujhe tujhse door jaane hi nahi deta.
Humari baatein itni badh gayi thi ki mujhe pata hi nahi chala kab dosti se love wali feeling aa gayi.

Yaad hai wo din? Ghanto‑ghanto baatein, tu mujhe sone nahi deti thi 😂 main din mein so jata tha aur tu call pe call karke pareshaan karti thi. Bahut achhe din the yaar.

Shayad kisi ki nazar lag gayi. Tu kehti thi na “nazar is real” aur aaj main bhi maanta hoon — nazar is real.
Phir tera college jaana… aur ek‑ek mahina wait karna ki kab tera message ya call aayega 🫠

Pyaar mein insaan wait karta hai, attachment mein pagal ho jata hai. Shayad main dono tha.
Main 5 mahine bhi wait karta raha sirf ek baar baat karne ke liye.

Tere naam se mujhe pyaar hai, jise sunte hi meri heartbeat tez ho jaati hai. Teri awaaz se pyaar hai, jise sunte hi sab normal ho jata hai.
Mujhe poori ki poori tu pasand hai.

Abhi mujhe bahut kuch paana hai — ek achhi job, tere paas hi thoda door ek ghar, aur last mein… tujhe.
Agar tu saath rahi to main sab karke dikhaunga. Par agar tu aise hi hurt karti rahi to sach mein main door chala jaunga… bhool phir bhi nahi paunga.

2024 se 2025 tak ki kahani... I hope 2026 mein aur bhi achhe moments banayenge 🤍

Ly ❤️‍
Happpppppyyyy Birthday meri Shraddha 🎂❤️`;

function startSoulMessage() {
    document.getElementById('preMessage').classList.add('hidden');
    document.getElementById('messageContainer').classList.remove('hidden');
    document.getElementById('zoroorAudio').play();
    
    typeWriter("soulMsgBody", fullMessage, 60, () => {
        document.getElementById('madamJiBtn').classList.remove('hidden');
    });
}

// Utility: Typewriter Function
function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
            element.scrollTop = element.scrollHeight; // Auto-scroll
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Step 17: Final Send
function sendToPriyanshu() {
    const val = document.getElementById('finalMsg').value;
    alert("Message Sent to Priyanshu! ❤️ (Actual implementation needs a backend or EmailJS)");
    alert("Happy Birthday Once Again, Shraddha!");
}
