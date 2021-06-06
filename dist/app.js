//navigation burger icon

const menu = document.getElementById('menu');
const burgerIcon = document.getElementById('toggler');

burgerIcon.addEventListener('click', function(){
    menu.classList.toggle('show');
    
})

//input field drop down menu


// const list = document.getElementById('list');
// const dropdown = document.getElementById('dropdown');
// const down = document.getElementById('down');
// const up = document.getElementById('up');

// dropdown.addEventListener('click', function(){
//     list.classList.toggle('show');
//     down.classList.toggle('hide');
//     up.classList.toggle('display');
// })

const value = document.getElementById('value');
const rent = document.getElementById('rent');
const sale = document.getElementById('sale');
const buy = document.getElementById('buy');


rent.addEventListener('click',function(){
    value.innerText ='For rent';
    event.preventDefault();
})

sale.addEventListener('click',function(){
    value.innerText ='For sale';
    event.preventDefault();
})
buy.addEventListener('click',function(){
    value.innerText ='For buy';
    event.preventDefault();
})


//navbar sticky to the top

const header = document.getElementById('header');
const hero = document.getElementById('hero')

object = {

}

const observer = new IntersectionObserver(function( entries , observer){ 
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            header.classList.add('fixed-navbar')
        } else{
            header.classList.remove('fixed-navbar')
        }
    })
} , object)

observer.observe(hero);


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