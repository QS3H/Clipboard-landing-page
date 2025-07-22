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
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });
}

// Reduced motion preference
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Intersection Observer for section reveal animations
if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("stagger-animation", "loaded");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

// Loading Animation
if (!prefersReducedMotion) {
  document.addEventListener("DOMContentLoaded", () => {
    // Create loading overlay
    const overlay = document.createElement("div");
    overlay.className = "loading-overlay";
    overlay.innerHTML = `
      <img src="images/logo.svg" alt="Loading..." class="loading-logo">
    `;
    document.body.appendChild(overlay);

    // Handle content reveal
    window.addEventListener("load", () => {
      document.body.style.opacity = "1";
      setTimeout(() => {
        overlay.classList.add("fade-out");
        // Reveal sections with stagger
        document.querySelectorAll("section").forEach((section, index) => {
          setTimeout(() => {
            section.classList.add("stagger-animation", "loaded");
          }, index * 200);
        });
      }, 1000);
      setTimeout(() => {
        overlay.remove();
      }, 1500);
    });
  });
}

// Button and image hover effects (CSS handles most, but JS fallback for accessibility)
document.querySelectorAll(".button-container a").forEach((button) => {
  button.addEventListener("focus", function () {
    this.style.outline = "2px solid hsl(171, 66%, 44%)";
    this.style.outlineOffset = "2px";
  });
  button.addEventListener("blur", function () {
    this.style.outline = "";
    this.style.outlineOffset = "";
  });
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("focus", function () {
    this.style.outline = "2px solid hsl(233, 100%, 69%)";
    this.style.outlineOffset = "2px";
  });
  img.addEventListener("blur", function () {
    this.style.outline = "";
    this.style.outlineOffset = "";
  });
});
