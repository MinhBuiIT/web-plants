const nav = document.querySelector(".nav-wrap");
const navHeight = nav.offsetHeight;
document.addEventListener("scroll",debounce(function(e) {
    if(window.scrollY > navHeight) {
        nav.classList.add("fixed");
    }else {
        nav.classList.remove("fixed");
    }
}))
function debounce(func, timeout=50){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
// Navigation
// const navLinks = document.querySelectorAll('.nav-link');
// [...navLinks].forEach((navLink) => {
//     navLink.addEventListener('click',function(e) {
//         e.preventDefault();
//         document.querySelector('.nav-link.active').classList.remove('active');
//         console.log(e.currentTarget);
//         e.currentTarget.classList.add('active');
//     })
// })