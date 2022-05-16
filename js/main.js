//the code navpar
let contNav = document.getElementsByClassName('contNav');
let fed = document.querySelector('.fed');

function openContNav() {
    document.querySelector('.contNav').classList.remove('clossContNav');
    document.querySelector('.fed').classList.add('clossContNav');
}
function clossContNav() {
    document.querySelector('.contNav').classList.add('clossContNav');
    document.querySelector('.fed').classList.remove('clossContNav');
}
AOS.init();