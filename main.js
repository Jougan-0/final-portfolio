const menuBtn=document.querySelector('.toogle-btn');
const classes=document.querySelector('.navbar-links');
menuBtn.addEventListener('click',function Onclick(){
    classes.classList.toggle('active');
})
