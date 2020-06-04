let slideIndex = 1
let slideRight = false

let slide = () => {
    let slides = $('.slide')
    if(slideRight) slideIndex--
    else slideIndex++
    if(slideIndex == 7) slideIndex = 2
    if(slideIndex == 1) slideIndex = 6
    slides.css({display: 'none'})
    $(`.slide:nth-child(${slideIndex})`).fadeOut(500)
    $(`.slide:nth-child(${slideIndex})`).fadeIn(500)
}

let autoSlide = () => {
    slide()
    setTimeout(autoSlide, 5000)
}

$('.left').click(() => {
    slideRight = false
    slide()
})

$('.right').click(() => {
    slideRight = true
    slide()
})

autoSlide()