const yearEl = document.getElementById('year');
const onlineEl = document.getElementById('online-count');

yearEl.textContent = new Date().getFullYear();

if (onlineEl) {
  const baseOnline = 6;
  setInterval(() => {
    const variation = Math.floor(Math.random() * 3);
    onlineEl.textContent = (baseOnline + variation).toLocaleString();
  }, 3000);
}
