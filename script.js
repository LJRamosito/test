let buttonColor = document.querySelector('.change-color');
let appColor = document.querySelector('.container');

buttonColor.addEventListener('click', function(){
    appColor.classList.toggle('light-mode');
});