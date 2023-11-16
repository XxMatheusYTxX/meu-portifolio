function mostrarmenu() {
    let boxshadow = document.querySelector(".nav");
    let menuMobile = document.querySelector('.menumobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "Imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone').src = "Imagens/close_white_36dp.svg";
    }

    if (boxshadow.classList.contains('noshadow')) {
        boxshadow.classList.remove('noshadow');
    }

    else {

        boxshadow.classList.add('noshadow');
    }
}
