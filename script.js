document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("dark-mode-button");
  const logo = document.getElementById("logo");
  const socialIcons = document.querySelectorAll(".social-icons img");

  themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is enabled
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Set the appropriate image source based on dark mode state
    if (isDarkMode) {
      logo.src = "images/main-light.png";
      themeToggle.src = "images/darkmode-light.png";
      
      // Invert social icons colors for dark mode
      socialIcons.forEach(icon => {
        icon.style.filter = "invert(1)";
      });
    } else {
      logo.src = "images/main.png";
      themeToggle.src = "images/darkmode.png";
      
      // Reset social icons colors for light mode
      socialIcons.forEach(icon => {
        icon.style.filter = "none";
      });
    }
  });
});
