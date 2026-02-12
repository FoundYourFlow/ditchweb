const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.querySelector("#year");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 40}ms`;
  observer.observe(item);
});
