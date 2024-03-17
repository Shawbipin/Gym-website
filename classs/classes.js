
const slides = document.querySelectorAll(".slide");
var counter = 0;

// console.log(slides);

slides.forEach(
     (slide,index)=>{
    slide.style.left = `${index * 100}%`
 }
)


const goPrev =()=>{
    if(counter == 0){
      counter = slides.length -1;
      slideImage();
    }else{
        counter--;
        slideImage();
    }
}

const goNext =()=>{
   if(counter == slides.length -1){
     counter = 0;
     slideImage();
   }else{
    counter++;
    slideImage();
   }
}


const slideImage = ()=>{
    slides.forEach( (slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}




function showModal(){
  document.querySelector('.overlay').classList.add('showoverlay')
  document.querySelector('.login-form').classList.add('showloginform')
}

function CloseModal(){
  document.querySelector('.overlay').classList.remove('showoverlay')
  document.querySelector('.login-form').classList.remove('showloginform')
}

// var btnlogin = document.querySelector(".login");// button
// btnlogin.addEventListener("click",showModal); // Button click

var c = document.querySelector("span");
c.addEventListener("click",CloseModal);




const mobile_nav =  document.querySelector(".mobile-navbar-btn");
const nav_header  = document.querySelector(".navbar");

const toggleNavbar = ()=>{
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click",()=>toggleNavbar())

