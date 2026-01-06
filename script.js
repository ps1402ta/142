// --- Core Logic ---
function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.getElementById('step' + stepNumber).classList.add('active');
    
    if (stepNumber === 4) startScanning();
    if (stepNumber === 8) startEmotionalTypewriter();
    if (stepNumber === 15) startFireworksCountdown();
}

// --- Step 1-3: Password ---
let tries = 0;
function checkPassword() {
    const pass = document.getElementById('passwordInput').value;
    const msg = document.getElementById('gatekeeper-msg');
    const hint = document.getElementById('hintText');
    tries++;

    if (pass.toLowerCase() === "butkiii") {
        msg.innerHTML = "<span class='glow-text' style='color:#00ff88'>Access Granted!</span>";
        setTimeout(() => nextStep(4), 1500);
    } else {
        if (tries === 1) msg.innerText = "Tu Butkii nahi hai! Chal bahar nikal!";
        else if (tries === 2) msg.innerText = "Panda ko bta rha koi or ghus rha h buktiii nahi";
        else {
            msg.innerText = "Abey Butkii! Password bhool gayi?";
            hint.classList.remove('hidden');
        }
    }
}

// --- Step 4: Scanning ---
function startScanning() {
    const bar = document.querySelector('.progress-fill');
    const details = document.getElementById('scanDetails');
    let width = 0;
    
    const interval = setInterval(() => {
        width++;
        bar.style.width = width + '%';
        if (width === 30) details.innerText = "Checking height... [Short Detected 📏]";
        if (width === 70) details.innerText = "Checking ego... [Extreme High Detected 🔥]";
        
        if (width >= 100) {
            clearInterval(interval);
            document.body.classList.add('pink-mode');
            nextStep(6);
        }
    }, 50);
}

// --- Step 6: The Trap ---
function moveNoButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function trapSuccess() {
    document.getElementById('taraAudio').play();
    nextStep(7);
}

// --- Step 12: Party Pop-ups (Confetti) ---
function explodeGift() {
    document.getElementById('giftBox').style.display = 'none';
    document.getElementById('birthdayWishes').classList.remove('hidden');
    
    // Left side pop-up
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: 0, y: 1 } // Bottom Left
    });
    // Right side pop-up
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: 1, y: 1 } // Bottom Right
    });
}

// --- Step 15: Grand Finale Fireworks ---
function startFireworksCountdown() {
    let count = 5;
    const timer = setInterval(() => {
        document.getElementById('countdown').innerText = count;
        if (count === 0) {
            clearInterval(timer);
            document.getElementById('countdown').classList.add('hidden');
            document.getElementById('nameGlow').classList.remove('hidden');
            
            // Continuous Fireworks for 5 seconds
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) return clearInterval(interval);

                const particleCount = 50 * (timeLeft / duration);
                confetti({...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 }});
            }, 250);

            setTimeout(() => nextStep(16), 6000);
        }
        count--;
    }, 1000);
}

// --- Typewriter Utility ---
function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
            element.scrollTop = element.scrollHeight;
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Soul Message Function
function startSoulMessage() {
    document.getElementById('preMessage').classList.add('hidden');
    document.getElementById('messageContainer').classList.remove('hidden');
    document.getElementById('zoroorAudio').play();
    
    const msg = `Mujhe pata hai humare beech aaj‑kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se… aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga jo mere saath 1.5 saal tak chalega.

Aur haan yaar… 1.5 saal ho gaye, pata hi nahi chala.
Tujhe wo date yaad hai? June 17 — jab tu mujhe mili thi, jab humari baatein start hui thi.

Wo song yaad hai tujhe? Ruk… uski kuch lines aaj bhi mujhe yaad hain:
“Haan, maanga jo mera hai, jaata kya tera hai? Maine kaun si tujhse jannat maang li? Kaisa Khuda hai tu, bas naam ka hai tu Rabba, jo teri itni si bhi na chali”
Ye lines aaj tak mere saath hain, shayad kabhi bhool bhi nahi paunga.

Phir meri life mein wo breakup hua… jab mujhe dhokha mila. Us time tu hi thi jo mere saath thi. Dheere‑dheere baatein hui, dosti hui, aur pata hi nahi chala kab kya ho gaya.

Sach bolun, mujhe kaafi options mile the... Rakhi, Sanchita, Priya, Sejal 😂
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
    
    typeWriter("soulMsgBody", msg, 50, () => {
        document.getElementById('madamJiBtn').classList.remove('hidden');
    });
}
