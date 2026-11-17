let menu = document.getElementById("fixed-menu");
let mob_menu = document.getElementById("mobile-menu");

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let active = document.querySelector('.active');
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       active.classList.remove('active');
       if mob_menu
   }
});

let classLink = ".mainlink"
window.onscroll = function(){
    let h = document.documentElement.clientHeight
    if (window.scrollY >= h*4){
        classLink = ".comments-link";
    }
    else if (window.scrollY >= h*3){
        classLink = ".works-link";
    }
        else if (window.scrollY >= h*2){
        classLink = ".skills-link";
    }
        else if (window.scrollY >= h){
        classLink = ".about-link";
    }
    else{
        classLink = ".main-link";
    }
    let activeBtn = document.querySelector(".active");
    let newActiveBtn = document.querySelector(classLink);
    if (!newActiveBtn.classList.contains("active")){
        newActiveBtn.classList.add("active");
        newActiveBtn.classList.remove("non-active")
        activeBtn.classList.remove("active");
        activeBtn.classList.add("non-active");
        
    }

}

document.querySelector(".mobile-button").addEventListener("click", function(event){
    document.querySelector(".mobile-menu").classList.toggle("hide");
});