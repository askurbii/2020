let cartButton = document.querySelector("#cart-button");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");

cartButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open");
}

new WOW().init();