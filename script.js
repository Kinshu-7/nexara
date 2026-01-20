
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

    <script>
  window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  });
</script>
