const envelope = document.getElementById("envelope");

envelope.addEventListener("click", toggleLetter);
envelope.addEventListener("touchstart", toggleLetter);

function toggleLetter() {
    envelope.classList.toggle("open");
}

/* 💖 Corazones flotando */
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 500);
