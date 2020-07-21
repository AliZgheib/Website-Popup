const show =document.querySelector('#show');
const popup =document.querySelector('.popup');
const quit =document.querySelector('.header p');
const cont =document.querySelector('.container');
show.addEventListener('click',showpopup);

quit.addEventListener('click',exitpopup);

function showpopup(){
document.body.style.backgroundColor="gray";
    popup.classList.remove('fadeout');
   popup.classList.add('fadein');
}

function exitpopup(){
document.body.style.backgroundColor="white";

    popup.classList.remove('fadein');
    popup.classList.add('fadeout');

}



