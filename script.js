const hamburgerMenu = document.querySelector('.hamburger-menu');
const  sidebar = document.querySelector('.sidebar');
const  line1 = document.querySelector('.line1');
const  line2 = document.querySelector('.line2');
const  line3 = document.querySelector('.line3');
const links = document.querySelectorAll('.link');
const lines = document.querySelectorAll('.line');

hamburgerMenu.addEventListener('click', () =>{
    sidebar.classList.toggle('visible');
    line1.classList.toggle('rotate');
    line2.classList.toggle('rotate');
    line3.classList.toggle('rotate');
})

window.addEventListener('scroll', () =>{
    navbar.classList.toggle("sticky", window.scrollY > 100);
    links.forEach((link) =>{
        link.classList.toggle('active', window.scrollY > 100);
    })
    hamburgerMenu.classList.toggle('active', window.scrollY > 100)
    lines.forEach((line) =>{
         line.classList.toggle('active', window.scrollY > 100)
    })

    chevrondown.classList.toggle('active', window.scrollY > 100);
    toggleTheme.classList.toggle('active', window.scrollY > 100);
    
})

const changeLangBTN = document.querySelector('.change-lang');
const langMenu = document.querySelector('.lang-menu');
const chevrondown = document.querySelector('.fa-chevron-down');
const toggleTheme = document.querySelector('.fa-sun');

changeLangBTN.addEventListener('click', () =>{
    langMenu.classList.toggle('visible')
    chevrondown.classList.toggle('rotate');
})


window.addEventListener('click', (event) =>{
    if(!langMenu.contains(event.target) && !changeLangBTN.contains(event.target)){
        langMenu.classList.remove('visible');
    }

    if(!chevrondown.contains(event.target) && !langMenu.contains(event.target) && !changeLangBTN.contains(event.target)){
        chevrondown.classList.remove("rotate")
    }
})



//darkmode implementation

const body = document.querySelector('#body');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');

toggleTheme.addEventListener('click', ()=>{
    body.classList.toggle('darkmode');
    navbar.classList.toggle('darkmode')
    links.forEach(link =>{
        link.classList.toggle('darkmode');
    })
    chevrondown.classList.toggle('darkmode');
    lines.forEach(line =>{
        line.classList.toggle('darkmode')
    })
    footer.classList.toggle('darkmode')
})
