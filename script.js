// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("nav-list");

if (toggle && navList) {
  toggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  navList.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navList.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

function currentTheme() {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit) return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}

// React to OS theme changes when no explicit user choice
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    // Nothing to do — CSS handles via @media query when no data-theme set
  });
