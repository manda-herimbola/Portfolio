const sliderImage = document.querySelectorAll(".slider_image")
const img = [ ...sliderImage ]

let i = sliderImage.length

setInterval(() => {
    i--;

    if( i === 0 ){
        i = img.length
        img.map( item => item.style.opacity = '1' )
    }else {
        img[i].style.opacity = '0'
        img[i].style.transitionDuration = '2000ms'
    }
}, 6000)
