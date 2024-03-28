const navbar = document.querySelector('nav')
const formEmail = document.querySelector('.send_email_opacity')
const descEmail = document.querySelector('.send_email_desc_opacity')
const skillsComponent = document.querySelector('.skills')
const experiencesComponent = document.querySelector('.experiences')
const projectComponent = document.querySelector('.project')
const about = document.querySelector('#about-me')

const changeNavbar = () => {
    if( window.scrollY !== 0 ) {
        navbar.style.paddingTop = '0'
        navbar.style.backgroundColor = 'rgba(0, 42, 64, 1)'
    }else {
        navbar.style.paddingTop = '50px'
        navbar.style.backgroundColor = 'rgba(0, 42, 64, 0)'
    }

    if (window.scrollY >= 200){
        skillsComponent.style.opacity = "1"
    }else {
        skillsComponent.style.opacity = "0"
    }

    if (window.scrollY >= 800){
        experiencesComponent.style.opacity = "1"
    }else {
        experiencesComponent.style.opacity = "0"
    }

    if (window.scrollY >= 1300){
        projectComponent.style.opacity = "1"
    }else {
        projectComponent.style.opacity = "0"
    }

    if (window.scrollY >= 2000){
        formEmail.style.opacity = "1"
        descEmail.style.opacity = "1"
    }else {
        formEmail.style.opacity = "0"
        descEmail.style.opacity = "0"
    }

    if (window.scrollY >= 2600){
        about.style.opacity = "1"
    }else {
        about.style.opacity = "0"
    }

}

window.addEventListener('scroll', changeNavbar)