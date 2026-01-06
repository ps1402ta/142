// Make sure this file is linked in HTML:
// <script src="script.js"></script>

document.addEventListener("DOMContentLoaded", () => {
  // Screens
  const screenGate = document.getElementById("screen-gatekeeper");
  const screenScan = document.getElementById("screen-scan");
  const screenLove = document.getElementById("screen-love");
  const screenPromise1 = document.getElementById("screen-promise-1");
  const screenPromise2 = document.getElementById("screen-promise-2");
  const screenGift = document.getElementById("screen-gift");
  const screenAlbum = document.getElementById("screen-album");
  const screenLifafa = document.getElementById("screen-lifafa");
  const screenFireworks = document.getElementById("screen-fireworks");
  const screenSoul = document.getElementById("screen-soul");
  const screenLast = document.getElementById("screen-last");

  // Step 1–3: Password logic
  const passwordInput = document.getElementById("password-input");
  const passwordSubmit = document.getElementById("password-submit");
  const passwordMessage = document.getElementById("password-message");
  const passwordHint = document.getElementById("password-hint");

  let passwordTries = 0;
  const correctPassword = "Butkiii";

  passwordSubmit.addEventListener("click", () => {
    const val = (passwordInput.value || "").trim();
    passwordTries++;

    if (val === correctPassword) {
      passwordMessage.style.color = "#7CFC00";
      passwordMessage.textContent = "Access Granted ✅";
      setTimeout(() => {
        showScreen(screenScan);
        startScanning();
      }, 800);
    } else {
      if (passwordTries === 1) {
        passwordMessage.textContent = "Tu Butkii nahi hai! Chal bahar nikal!";
      } else if (passwordTries === 2) {
        passwordMessage.textContent =
          "Panda ko bta rha koi or ghus rha h buktiii nahi";
      } else if (passwordTries === 3) {
        passwordMessage.textContent = "Wrong password fir se 😒";
        passwordHint.textContent = "Hint: try 'Butkiii'";
      } else {
        passwordMessage.textContent = "Ab to Butkiii hi likh de na 😭";
      }
    }
  });

  // Enter key on password
  passwordInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") passwordSubmit.click();
  });

  // Step 4–5: Scanning + Theme Morph
  const scanBar = document.getElementById("scan-bar");
  const scanStatus = document.getElementById("scan-status");
  const scanMainText = document.getElementById("scan-main-text");

  function startScanning() {
    let progress = 0;
    const stages = [
      "Checking height... [Short Detected]",
      "Checking ego... [High Detected]",
      "Checking cuteness... [Overloaded 💗]",
      "Checking smile... [Dangerously Beautiful]",
      "BUTKII MODE ON!"
    ];

    typeText(
      scanMainText,
      "Scanning for Butkii features...",
      35,
      () => {}
    );

    const scanInterval = setInterval(() => {
      progress += 8;
      if (progress > 100) progress = 100;
      scanBar.style.width = progress + "%";

      const stageIndex = Math.min(
        Math.floor((progress / 100) * stages.length),
        stages.length - 1
      );
      scanStatus.textContent = stages[stageIndex];

      if (progress >= 100) {
        clearInterval(scanInterval);
        document.body.classList.add("butkii-theme");
        setTimeout(() => {
          showScreen(screenLove);
          initLoveScreen();
        }, 800);
      }
    }, 250);
  }

  // Step 6: Love question - moving NO button
  const loveQuestion = document.getElementById("love-question");
  const loveYes = document.getElementById("love-yes");
  const loveNo = document.getElementById("love-no");
  const loveButtons = document.getElementById("love-buttons");
  const taraAudio = document.getElementById("tara-audio");

  const loveAfter = document.getElementById("love-after");
  const loveAfterText = document.getElementById("love-after-text");
  const emotionalLine = document.getElementById("emotional-line");
  const goPromise1 = document.getElementById("go-promise-1");

  function initLoveScreen() {
    typeText(loveQuestion, "Do you love me?", 60);

    // make NO run away
    loveNo.addEventListener("mouseenter", moveNoButton);
    loveNo.addEventListener("touchstart", moveNoButton);

    loveYes.addEventListener("click", () => {
      try {
        taraAudio.currentTime = 0;
        taraAudio.play().catch(() => {});
      } catch (e) {}

      loveButtons.style.display = "none";
      loveAfter.style.display = "flex";
      loveAfter.style.flexDirection = "column";
      loveAfter.style.alignItems = "center";

      typeText(
        loveAfterText,
        "I know ki aap mujhse bohot pyaar karti ho... khikhi!",
        45,
        () => {
          typeText(
            emotionalLine,
            "i know aaj ka din teko psnd nhi phir bhi kuch special he hua tha aaj se 20 saal phle haina ?",
            45
          );
        }
      );
    });

    goPromise1.addEventListener("click", () => {
      showScreen(screenPromise1);
      initPromise1();
    });
  }

  function moveNoButton() {
    const containerRect = loveButtons.getBoundingClientRect();
    const btnRect = loveNo.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    let randX = Math.random() * maxX;
    let randY = Math.random() * maxY;

    // ensure button stays visible
    loveNo.style.position = "relative";
    loveNo.style.left = randX + "px";
    loveNo.style.top = randY + "px";
  }

  // Step 10: Promise 1
  const promise1Yes = document.getElementById("promise1-yes");
  const promise1No = document.getElementById("promise1-no");

  function initPromise1() {
    const textEl = screenPromise1.querySelector(".typewriter");
    typeText(
      textEl,
      "Promise kro 2026 se tu hamesa mere sath rahegi?",
      45
    );

    const goNext = () => {
      showScreen(screenPromise2);
      initPromise2();
    };

    promise1Yes.onclick = goNext;
    promise1No.onclick = goNext;
  }

  // Step 11: Promise 2
  const goGift = document.getElementById("go-gift");

  function initPromise2() {
    const textEl = screenPromise2.querySelector(".typewriter");
    typeText(
      textEl,
      "Waada karo, chahe kuch bhi ho, tum apni ye 'Butkii' wali smile nahi kam hogi samjiii.",
      45
    );

    goGift.onclick = () => {
      showScreen(screenGift);
      initGiftScreen();
    };
  }

  // Step 12: Gift box + confetti
  const giftBox = document.getElementById("gift-box");
  const giftMessage = document.getElementById("gift-message");

  function initGiftScreen() {
    giftBox.addEventListener("click", () => {
      giftBox.style.display = "none";
      giftMessage.style.display = "block";
      launchConfetti();

      setTimeout(() => {
        showScreen(screenAlbum);
        initAlbum();
      }, 4500);
    });
  }

  function launchConfetti() {
    const colors = ["#ff6fd8", "#ff9068", "#ffe27a", "#9b5cff", "#00f5d4"];
    const total = 80;

    for (let i = 0; i < total; i++) {
      const conf = document.createElement("span");
      conf.className = "confetti";
      conf.style.left = Math.random() * 100 + "%";
      conf.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      conf.style.animationDelay = Math.random() * 1.5 + "s";
      document.getElementById("screen-gift").appendChild(conf);

      setTimeout(() => conf.remove(), 4000);
    }
  }

  // Step 13: Photo album (ps1.jpg ... ps10.jpg)
  const albumBook = document.getElementById("album-book");
  const photoLeft = document.getElementById("photo-left");
  const photoRight = document.getElementById("photo-right");
  const albumPrev = document.getElementById("album-prev");
  const albumNext = document.getElementById("album-next");
  const goLetter = document.getElementById("go-letter");

  let currentIndex = 1; // ps1 & ps2

  function initAlbum() {
    const pagesText = [
      "ps1.jpg",
      "ps2.jpg",
      "ps3.jpg",
      "ps4.jpg",
      "ps5.jpg",
      "ps6.jpg",
      "ps7.jpg",
      "ps8.jpg",
      "ps9.jpg",
      "ps10.jpg"
    ];

    function setPhotos() {
      photoLeft.src = `ps${currentIndex}.jpg`;
      const rightIndex = currentIndex + 1;
      if (rightIndex <= 10) {
        photoRight.src = `ps${rightIndex}.jpg`;
        photoRight.style.visibility = "visible";
      } else {
        photoRight.style.visibility = "hidden";
      }
    }

    setPhotos();

    albumNext.onclick = () => {
      if (currentIndex < 9) {
        currentIndex += 2;
        flipPages(true, setPhotos);
      }
    };

    albumPrev.onclick = () => {
      if (currentIndex > 1) {
        currentIndex -= 2;
        flipPages(false, setPhotos);
      }
    };

    goLetter.onclick = () => {
      showScreen(screenLifafa);
      initLifafa();
    };
  }

  function flipPages(forward, callback) {
    const leftPage = document.getElementById("page-left");
    const rightPage = document.getElementById("page-right");

    const cls = forward ? "flip-forward" : "flip-backward";

    rightPage.classList.add(cls);
    setTimeout(() => {
      leftPage.classList.add(cls);
    }, 60);

    setTimeout(() => {
      rightPage.classList.remove(cls);
      leftPage.classList.remove(cls);
      callback();
    }, 750);
  }

  // Step 14: Lifafa with message
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");
  const goFireworks = document.getElementById("go-fireworks");

  function initLifafa() {
    envelope.addEventListener("click", () => {
      envelope.style.display = "none";
      letter.style.display = "block";

      const textEl = letter.querySelector(".typewriter");
      typeText(
        textEl,
        "i know m bht si chize nhi de skta lekin phir bhi kuch chahiye ho to Priyanshu yani muje jarur btana birthday girl samji ho ske to m jarur puri krunga",
        45
      );
    });

    goFireworks.onclick = () => {
      showScreen(screenFireworks);
      startFireworksSequence();
    };
  }

  // Step 15: Fireworks + SHRADDHA
  const countdownEl = document.getElementById("countdown");
  const fireworksArea = document.getElementById("fireworks-area");
  const goSoul = document.getElementById("go-soul");

  function startFireworksSequence() {
    let count = 5;
    countdownEl.textContent = count;

    const countdownTimer = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count <= 0) {
        clearInterval(countdownTimer);
        countdownEl.style.display = "none";
        fireworksArea.style.display = "block";
        startFireworks();

        setTimeout(() => {
          goSoul.style.display = "inline-block";
        }, 4000);
      }
    }, 1000);

    goSoul.onclick = () => {
      showScreen(screenSoul);
      initSoulMessage();
    };
  }

  function startFireworks() {
    const colors = ["#ff6fd8", "#ffd700", "#00f5d4", "#9b5cff", "#ff9068"];
    const centerX = fireworksArea.offsetWidth / 2;
    const centerY = fireworksArea.offsetHeight / 2;

    function spawnFirework() {
      const particles = 25;
      for (let i = 0; i < particles; i++) {
        const fw = document.createElement("div");
        fw.className = "firework";
        fw.style.left = centerX + "px";
        fw.style.top = centerY + "px";
        const angle = (Math.PI * 2 * i) / particles;
        const distance = 80 + Math.random() * 80;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        fw.style.setProperty("--dx", dx + "px");
        fw.style.setProperty("--dy", dy + "px");
        fw.style.background = colors[Math.floor(Math.random() * colors.length)];
        fireworksArea.appendChild(fw);
        setTimeout(() => fw.remove(), 1200);
      }
    }

    // blast few times
    let times = 0;
    const fwInterval = setInterval(() => {
      spawnFirework();
      times++;
      if (times > 5) clearInterval(fwInterval);
    }, 700);
  }

  // Step 16: Soul message
  const soulQuestion = document.getElementById("soul-question");
  const soulYes = document.getElementById("soul-yes");
  const zoroorAudio = document.getElementById("zoroor-audio");
  const soulMsgContainer = document.getElementById("soul-message-container");
  const soulMsgEl = document.getElementById("soul-message");
  const goLast = document.getElementById("go-last");

  const soulFullMessage = `
Mujhe pata hai humare beech aaj‑kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se… aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga jo mere saath 1.5 saal tak chalega.

Aur haan yaar… 1.5 saal ho gaye, pata hi nahi chala.
Tujhe wo date yaad hai? June 17 — jab tu mujhe mili thi, jab humari baatein start hui thi. Vese bhi ye message mai teko ek mahine bad tere birthday pr de rha hunga 14 january jis date ka muje bht intzar rhta h us din koi esha aya tha jisse m bht pyar krta hu

Wo song yaad hai tujhe? Ruk… uski kuch lines aaj bhi mujhe yaad hain:
“Haan, maanga jo mera hai, jaata kya tera hai? Maine kaun si tujhse jannat maang li? Kaisa Khuda hai tu, bas naam ka hai tu Rabba, jo teri itni si bhi na chali”
Ye lines aaj tak mere saath hain, shayad kabhi bhool bhi nahi paunga.

Sach bolun, mujhe kaafi options mile the... Or vo Sejal 😂
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
Happpppppyyyy Birthday meri Shraddha 🎂❤️
`.trim();

  function initSoulMessage() {
    typeText(
      soulQuestion,
      "Kya aap PS ka message padhna chahogi?",
      55
    );

    soulYes.onclick = () => {
      soulYes.style.display = "none";
      soulMsgContainer.style.display = "block";
      try {
        zoroorAudio.currentTime = 0;
        zoroorAudio.play().catch(() => {});
      } catch (e) {}

      typeText(soulMsgEl, soulFullMessage, 30, () => {
        goLast.style.display = "inline-block";
      });
    };

    goLast.onclick = () => {
      showScreen(screenLast);
      initLastScreen();
    };
  }

  // Step 17: Last message from her
  const herMessage = document.getElementById("her-message");
  const sendMessage = document.getElementById("send-message");
  const thankYou = document.getElementById("thank-you");

  function initLastScreen() {
    const textEl = screenLast.querySelector(".typewriter");
    typeText(
      textEl,
      "Kuch likho jo tum Priyanshu ko hamesa se bolna chahti thi...",
      50
    );

    sendMessage.onclick = () => {
      if (!herMessage.value.trim()) {
        alert("Kuch toh likh do Butkii 💗");
        return;
      }
      thankYou.style.display = "block";
      // Yaha se tum manually message dekh sakte ho (browser console, etc.)
      console.log("Shraddha ka message:", herMessage.value);
    };
  }

  // Utility: screen switch
  function showScreen(target) {
    const allScreens = document.querySelectorAll(".screen");
    allScreens.forEach((s) => (s.style.display = "none"));
    target.style.display = "flex";
  }

  // Utility: typewriter effect
  function typeText(el, fullText, speed = 40, callback) {
    el.textContent = "";
    let i = 0;

    function type() {
      if (i < fullText.length) {
        el.textContent += fullText.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        if (callback) callback();
      }
    }
    type();
  }

  // Start initial typewriter on gate screen
  const gateText = document.getElementById("gatekeeper-text");
  typeText(
    gateText,
    "Ruko! Aap bina permission ke entry nahi kar sakte.",
    50
  );
});
