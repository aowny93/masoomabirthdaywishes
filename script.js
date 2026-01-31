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
const wishText = document.getElementById("wishText");

// YOUR ULTIMATE WISH
const myWish = `Masooma, my love, even when life tests us and miles keep us apart, my heart is always with you.  
I may not be perfect, but my love for you is endless.  
You are my home, my peace, my forever.  
Happy Birthday, my Masooma ❤️ — From your husband, Aown`;

// PEOPLE WISHES (add later)
const peopleWishes = [
  // "From Sarah: Happy Birthday Masooma! ❤️",
  // "From Mom: Stay blessed forever ❤️"
];

// COMBINE ALL WISHES
const allWishes = [myWish, ...peopleWishes];
let wishIndex = 0;

// SHOW FIRST WISH
wishText.innerHTML = allWishes[0];
wishIndex = 1;

// ROTATE WISHES EVERY 10 SECONDS
setInterval(() => {
  wishText.innerHTML = allWishes[wishIndex];
  wishIndex = (wishIndex + 1) % allWishes.length;
}, 10000);

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
