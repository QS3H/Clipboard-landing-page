// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Check initial theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");

  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
});

// Intersection Observer for animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Add animation classes to elements
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("opacity-0");
  observer.observe(section);
});

// Add hover animations to buttons
document.querySelectorAll(".button-container a").forEach((button) => {
  button.classList.add("transform", "hover:scale-105", "transition-transform");
});

// Add animations to images
document.querySelectorAll("img").forEach((img) => {
  img.classList.add("transform", "hover:scale-105", "transition-transform");
});

// Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  // Create loading overlay
  const overlay = document.createElement("div");
  overlay.className = "loading-overlay";
  overlay.innerHTML = `
    <img src="images/logo.svg" alt="Loading..." class="loading-logo">
  `;
  document.body.appendChild(overlay);

  // Initialize sections without hiding them
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("stagger-animation");
  });

  // Handle content reveal
  window.addEventListener("load", () => {
    // Show initial content
    document.body.style.opacity = "1";

    // Fade out loading overlay
    setTimeout(() => {
      overlay.classList.add("fade-out");

      // Reveal sections with stagger
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add("loaded");
        }, index * 200); // Stagger each section by 200ms
      });
    }, 1000);

    // Remove overlay
    setTimeout(() => {
      overlay.remove();
    }, 1500);
  });
});

// Enhanced image animations
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(2deg)";
    this.style.transition = "transform 0.3s ease-out";
  });

  img.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Button hover effects
document.querySelectorAll(".button-container a").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
    this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "";
  });
});
