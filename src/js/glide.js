
//glide - carousel

const config ={
    type: 'carousel',
    gap: 0,
    focusAt: 'center',
    perView: 3,
    breakpoints: {
        1200: {
          perView: 1
        },
        700:{
            perView: 1
        }
      }
}

new Glide('.glide', config).mount()