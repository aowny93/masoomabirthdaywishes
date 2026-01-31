// MUSIC CONTROL
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().catch(() => {
      alert("Click the button to start the music — browser autoplay is blocked.");
    });
    musicBtn.textContent = "⏸️ Pause Our Song";
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Our Song";
    isPlaying = false;
  }
});

// WISHES
const allWishes = [
  `Masooma, my love, even when life tests us and miles keep us apart, my heart is always with you. ❤️ — From your husband, Aown`,
  `Happy Birthday Masooma! You light up every day with your smile and laughter. 🎉 — From your friend, Aown`,
  `Masooma, my dearest, my heart beats only for you. ❤️ — From your lover, Aown`
];

const wishesList = document.getElementById("wishesList");

// Add all wishes as cards
allWishes.forEach(wish => {
  const card = document.createElement("div");
  card.className = "wish-card";
  card.innerHTML = wish;
  wishesList.appendChild(card);
});

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = "20px";
  heart.style.opacity = "0.8";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 800);

// HEART FLOAT ANIMATION
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
