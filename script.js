
const checkbox = document.getElementById("agreeRules");
const joinBtn = document.getElementById("joinBtn");

checkbox.addEventListener("change", () => {
  joinBtn.disabled = !checkbox.checked;
  joinBtn.classList.toggle("disabled", !checkbox.checked);
});

joinBtn.addEventListener("click", () => {
  if (!joinBtn.disabled) {
    window.open("https://discord.gg/bqf4SuxVnm", "_blank");
  }
});

let mouseX = 50;
let mouseY = 50;

let currentX = 50;
let currentY = 50;

let autoX = 0;
let autoY = 50;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 100;
  mouseY = (e.clientY / window.innerHeight) * 100;
});

function animate() {
  /* slow automatic movement */
  autoX += 0.02;
  if (autoX > 100) autoX = 0;

  /* blend auto + cursor movement */
  const targetX = autoX + (mouseX - 50) * 0.25;
  const targetY = autoY + (mouseY - 50) * 0.25;

  /* smoothing */
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  document.body.style.backgroundPosition = `${currentX}% ${currentY}%`;

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 800); // fallback delay
});



