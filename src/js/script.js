 //SHOW MENU //
 const NavMenu = document.getElementById('nav-menu'),
       NavToggle = document.getElementById('nav-toggle'),
       NavClose = document.getElementById('nav-close');

//MENU SHOW
//valida se a constante existe 
if(NavToggle){
    NavToggle.addEventListener('click', ()=>{
      NavMenu.classList.add('show-menu');
    })
}


//MENU HIDDEN 
if(NavClose){
  NavClose.addEventListener('click',() => { 
    NavMenu.classList.remove('show-menu');
  })

}
 
//REMOVE MENU MOBILE 

const NavLink = document.querySelectorAll(".nav__link");

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

NavLink.forEach(n => n.addEventListener('click', LinkAction));