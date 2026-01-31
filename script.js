const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

// Play / Pause Music reliably
musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().catch(err => {
      alert("Click the button again if music doesn't play automatically.");
      console.log(err);
    });
    musicBtn.textContent = "⏸️ Pause Our Song";
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Our Song";
    isPlaying = false;
  }
});

// Ultimate romantic wish for Masooma
const myWish = `Masooma, my love,

I know sometimes it feels like I’m not enough, and distance makes the heart ache.  
I know life has tested us with misunderstandings, silences, and moments where doubt tried to creep in.  

But hear me now — my love for you is endless, unwavering, and true.  
I may not be perfect, but every heartbeat, every thought, every moment of my life is yours.  

Even when we are apart, I carry you in me — in my dreams, in my prayers, in every hope I have for the future.  
You are my home, my peace, my safe place, my forever.  

I promise to be better every day, to listen, to hold you close even from miles away, and to love you without limits.  
No distance, no fear, no doubt can ever change what I feel for you.  

Happy Birthday, my Masooma — the one who completes me, the one I cherish beyond words.  
I am yours, completely and eternally ❤️`;

// People wishes array (can add later)
const peopleWishes = [
  // Add more wishes here later
];

let allWishes = [myWish, ...peopleWishes];
let wishIndex = 0;

const wishText = document.getElementById("wishText");

function showNextWish() {
  wishText.innerHTML = allWishes[wishIndex];
  wishIndex = (wishIndex + 1) % allWishes.length;
}

// Show first wish immediately
showNextWish();
setInterval(showNextWish, 5000);

// Floating hearts animation
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

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
