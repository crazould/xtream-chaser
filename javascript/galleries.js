let img_url

for(let i = 3; i<13; i++){

    $(`.img-${i}`).mouseenter(() => {
        $(`.img-${i}`).animate({
            bottom: '0.70rem'
        })
    })
    
    $(`.img-${i}`).mouseleave(() => {
        $(`.img-${i}`).animate({
            bottom: '0rem'
        })
    })

    $(`.img-${i}`).click(() => {
        img_url = $(`.img-${i}`).css("background-image");

        $(`.lightbox`).css({
            display: 'block'
        })

        $(`.img-show`).css({
            "background-image": img_url
        })
        

    })

}

$(`.lightbox`).click(() => {
    $(`.lightbox`).css({
        display: 'none'
    })
})