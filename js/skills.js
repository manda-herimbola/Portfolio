const backendButton = document.querySelector('#backend_button')
const frontendButton = document.querySelector('#frontend_button')

const skills_visible = document.querySelector('.skills_visible')

const backend = document.querySelector('.backend')
const frontend = document.querySelector('.frontend')

const skills = [
    document.querySelector('.html_skills'),
    document.querySelector('.css_skills'),
    document.querySelector('.js_skills'),
    document.querySelector('.react_skills')
]

backendButton.addEventListener('click',(ev) => {
    ev.preventDefault()

    backend.style.display = 'block'
    frontend.style.display = 'none'

    if( backend.style.display === 'block' ){
        setTimeout(() => {
            frontend.style.opacity = '0'
            backend.style.opacity = '1'
        })
    }

})
frontendButton.addEventListener('click',(ev) => {
    ev.preventDefault()

    backend.style.display = 'none'
    frontend.style.display = 'flex'

    if( frontend.style.display === 'flex' ){
        setTimeout(() => {
            frontend.style.opacity = '1'
            backend.style.opacity = '0'
        })
    }
})
skills.map( item => {

    let count = 0

    item.addEventListener('mouseenter',(ev) => {
        ev.preventDefault()

        setInterval(()=>{
            count === 0 ? count++ : (
                count === (item.className === "html_skills" ? 89 :
                    (item.className === "css_skills" ? 86 :
                        (item.className === "js_skills" ? 78 :
                            (item.className === "react_skills" ? 80 : 0))))
                    ? count : count++
            )
            item.children[1].innerText = `${ count }%`
        }, 20)

    })

})