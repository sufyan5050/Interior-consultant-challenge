//grab every thing we needed
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//ad event listner
btn.addEventListener("click",() => {
    menu.classList.toggle("hidden");
})