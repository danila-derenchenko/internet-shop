"use strict";
let status = 0;
let button_menu = document.querySelector("#menu");
let menu_close = document.querySelector(".menu-close");
let menu = document.querySelector(".menu");
button_menu.addEventListener('click', function f() {
    menu.classList.toggle("menu-display");
});
menu_close.addEventListener('click', function g() {
    menu.classList.add("menu-display");
})
for (let element of document.querySelectorAll("#close_menu")) {
    element.addEventListener("click", () => {
        menu.classList.add("menu-display");
    })
}