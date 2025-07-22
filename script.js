document.addEventListener("DOMContentLoaded", function () {
  const menuIcono = document.querySelector(".menu-movil-icono");
  const menuMovil = document.querySelector(".menu-sde");

  if (menuIcono && menuMovil) {
    menuIcono.addEventListener("click", () => {
      menuIcono.classList.toggle("active");
      menuMovil.classList.toggle("active");
    });
  }
});
