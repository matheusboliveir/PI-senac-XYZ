let menuMobile = document.querySelector(`#menuMobile`);
let menu = document.querySelector(`#menu`);

menuMobile.onclick = function() {
    if (menuMobile.alt == `menuMobile`) {
        menu.className = `menuOpen`;
        menuMobile.src = `img/close-icon.svg`;
        menuMobile.alt = `menuOpen`;
    }
    else {
        menu.className = ``;
        menuMobile.src = `img/menu-icon.svg`;
        menuMobile.alt = `menuMobile`;
    }
}