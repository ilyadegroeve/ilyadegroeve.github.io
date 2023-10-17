document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("dark-mode-button");
  const logo = document.getElementById("logo");

  themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is enabled
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Set the appropriate image source based on dark mode state
    if (isDarkMode) {
      logo.src = "C:\\Users\\degro\\Documents\\Site\\index\\images\\main-light.png";
      themeToggle.src = "C:\\Users\\degro\\Documents\\Site\\index\\images\\darkmode-light.png";
    } else {
      logo.src = "C:\\Users\\degro\\Documents\\Site\\index\\images\\main.png";
      themeToggle.src = "C:\\Users\\degro\\Documents\\Site\\index\\images\\darkmode.png";
    }
  });
});
