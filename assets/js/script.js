const btnMobile = document.querySelector('.btn--mobile');
const nav = document.querySelector('nav');
const off = document.querySelector('.container--project.off');

off.addEventListener('click', (e) =>{
    e.preventDefault();
})

btnMobile.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

function closeMenu(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
    }
}
