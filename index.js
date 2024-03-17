

function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.login-form').classList.add('showloginform');
}

function CloseModal(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.login-form').classList.remove('showloginform')
}

// var btnlogin = document.querySelector(".login");// button
// btnlogin.addEventListener("click",showModal); // Button click

var c = document.querySelector("span");
c.addEventListener("click",CloseModal);



//********* js for navbar of moblie view***********

const mobile_nav =  document.querySelector(".mobile-navbar-btn");
const nav_header  = document.querySelector(".navbar");

const toggleNavbar = ()=>{
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click",()=>toggleNavbar())
