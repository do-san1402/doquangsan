let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = function() {
    menu.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');
}
// Khi scroll trình duyệt thì nav và tiems tự xóa

 window.onscroll = function () {
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active');

    if(window.scrollY > 80) {
        document.querySelector('#scroll-top').classList.add('active')
    }else {
        document.querySelector('#scroll-top').classList.remove('active')
    }

}
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval( loader, 2500);
}
window.onload = fadeOut();

const $ = document.querySelector.bind(document) 
const $$ = document.querySelectorAll.bind(document)


const tabs = $$(".navbar-item")
const tabActive = $(".navbar-item.active-nav")


tabs.forEach((tab, index) =>{
    tab.onclick = function () {
        $(".navbar-item.active-nav").classList.remove('active-nav')
        this.classList.add('active-nav')
    }
});