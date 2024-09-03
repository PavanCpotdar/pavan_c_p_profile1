function openHamburger(){
    console.log("object")
    const menu = document.querySelector('.hamburger-menu-icon');
    const menuLinks = document.querySelector('.hamburger-menu-links');

    menu.classList.toggle('open')
    menuLinks.classList.toggle('open')
}

const menu = document.querySelector('.hamburger-menu-icon')

menu.addEventListener('click',openHamburger);


let button = document.querySelector("#submit-form");

button.addEventListener('click',handleSubmit);

function handleSubmit (e){
    e.preventDefault()
    var link = "mailto:pavanc72@gmail.com"
    + "?cc=pavanpotdar95@gmail.com"
    + "&subject=" + encodeURIComponent("This is my subject")
    + "&body=" + encodeURIComponent(document.getElementById('myText').value)
;
window.location.href = link;
}