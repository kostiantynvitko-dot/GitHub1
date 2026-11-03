let menu = document.getElementById("fixed-menu");

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let active = document.querySelector('.active');
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       active.classList.remove('active');
   }
});