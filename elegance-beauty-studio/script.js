document.documentElement.classList.add("js-ready");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Deschide meniul");
  navigation.classList.remove("is-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Deschide meniul" : "Închide meniul");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const bookingMessage = "Bună ziua! Aș dori detalii despre o programare la Elegance Beauty Studio.";
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/?text=${encodeURIComponent(bookingMessage)}`;
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}