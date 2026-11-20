document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#mobile-menu");
  const openBtn = document.querySelector(".burger-btn");
  const closeBtn = document.querySelector(".mobile-menu-close");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!menu || !openBtn) return;

  const openMenu = () => {
    menu.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  links.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // якщо розтягнули вікно до tablet, закриваємо меню і знімаємо блокування скролу
  window
    .matchMedia("(min-width: 768px)")
    .addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
});
