const menuIcono = document.querySelector(".menu-movil-icono");
const menuMovil = document.querySelector(".menu-sde");

menuIcono.addEventListener("click", () => {
    menuIcono.classList.toggle("active");
    menuMovil.classList.toggle("active");
});
