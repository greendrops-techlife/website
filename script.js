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
