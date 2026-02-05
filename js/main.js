/* ======================
   TYPING TEXT EFFECT
====================== */
const texts = [
  "Recover the Data. Eliminate the Risk.",
  "Cyber Intelligence. Zero Trust.",
  "Security is not optional."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 80);
  }
})();

/* ======================
   MOBILE MENU
====================== */
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navLinks").classList.toggle("show");
};

/* ======================
   MATRIX BACKGROUND
====================== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(57, 255, 136, 0.4)";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.985) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}


setInterval(drawMatrix, 33);

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
