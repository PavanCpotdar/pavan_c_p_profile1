function openHamburger(){
    console.log("object")
    const menu = document.querySelector('.hamburger-menu-icon');
    const menuLinks = document.querySelector('.hamburger-menu-links');

    menu.classList.toggle('open')
    menuLinks.classList.toggle('open')
}

const menu = document.querySelector('.hamburger-menu-icon')

menu.addEventListener('click',openHamburger)