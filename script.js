// Create animated particles
function createParticles() {
  const container = document.getElementById('particles');
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    container.appendChild(particle);
  }
}

// Smooth background animation based on mouse movement
let mouseX = 50;
let mouseY = 50;
let currentX = 50;
let currentY = 50;
let autoX = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 100;
  mouseY = (e.clientY / window.innerHeight) * 100;
});

function animate() {
  autoX += 0.015;
  if (autoX > 100) autoX = 0;

  const targetX = autoX + (mouseX - 50) * 0.2;
  const targetY = 50 + (mouseY - 50) * 0.2;

  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  document.body.style.backgroundPosition = `${currentX}% ${currentY}%`;
  requestAnimationFrame(animate);
}

// Checkbox functionality
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

// Initialize immediately - no waiting
createParticles();
animate();

// Show content immediately
document.getElementById("loader").classList.add("fade-out");
document.getElementById("content").classList.add("show");

setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 500);

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.8s ease';
  observer.observe(section);
});
