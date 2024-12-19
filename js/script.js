// Add custom JavaScript here
function userScroll(){
    const navbar = document.getElementById('navbarMain');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
        }
    })
};

document.addEventListener('DOMContentLoaded', userScroll());