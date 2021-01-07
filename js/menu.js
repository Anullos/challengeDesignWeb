const menu = document.querySelector(".menu");
const nav = document.querySelector(".navegacion");


menu.addEventListener("click", () => {
    //cada vez que hace click añade o quita la clase spread
    nav.classList.toggle("spread");
});

window.addEventListener("click", e => {
    if (nav.classList.contains("spread") && e.target != nav && e.target != menu) {
        nav.classList.toggle("spread");
    }
});