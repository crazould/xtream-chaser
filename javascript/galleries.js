let img_url


for(let i = 1; i <= $('.img-container').length; i++){

    $(`.img-container:nth-child(${i})`).mouseenter(() => {
        $(`.img-container:nth-child(${i})`).animate({
            bottom: '0.70rem'
        },250)
    })
    
    $(`.img-container:nth-child(${i})`).mouseleave(() => {
        $(`.img-container:nth-child(${i})`).animate({
            bottom: '0rem'
        },250)
    })

    $(`.img-container:nth-child(${i})`).click(() => {
        img_url = $(`.img-container:nth-child(${i})`).css("background-image");

        $(`.lightbox`).css({
            display: 'block'
        })

        $(`.img-show`).css({
            "background-image": img_url
        })
        

    })

}

$(`.close-modal`).click(() => {
    $(`.lightbox`).css({
        display: 'none'
    })
})