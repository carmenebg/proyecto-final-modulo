
// Este fragmento de código tiene como objetivo crear un cursor personalizado que sigue al ratón y cambia su estilo al interactuar con ciertos elementos de la página.
// Para ello, se ha añadido la clase click a todos los elementos que debían tener esa animación.

const pointer = document.querySelector(`.Pointer`)
console.log(pointer)

const boton = document.querySelector(`.Hero-button`)
console.log(boton)

const click = document.querySelectorAll(`.Click`)


window.addEventListener(`mousemove` , (e) =>{
    let {clientX, clientY} = e
    pointer.style.transform = `translateX(${clientX}px)  translateY(${clientY}px)`
})



click.forEach((_,i)=>{
    click[i].addEventListener(`mouseover`,()=>{
        pointer.classList.add(`Hover`)
    })
})

click.forEach((_,i)=>{
    click[i].addEventListener(`mouseout`,()=>{
        pointer.classList.remove(`Hover`)
    })
})



// Este fragmento de código tiene como objetivo aplicar un efecto visual de ampliación a los íconos de los servicios cuando el usuario pasa el ratón por encima de cada uno de los elementos de una lista de servicios. 

const icono = document.querySelectorAll(`.Servicios-logo`)
const servicios = document.querySelectorAll(`.Servicios-li`)

 
servicios.forEach((_,i)=>{
    servicios[i].addEventListener(`mouseover`, ()=>{
            icono[i].style.transform = `scale(1.2)`
    })
})

 
servicios.forEach((_,i)=>{
    servicios[i].addEventListener(`mouseout`, ()=>{
            icono[i].style.transform = `scale(1)`
    })
})




// Este fragmento de código tiene como objetivo crear un carrousel de imágenes en el que el usuario puede navegar hacia la siguiente o la anterior imagen al hacer clic en los botones de navegación representados por flechas.

let foto = 0

const next               = document.querySelector(`.der`)
const prev               = document.querySelector(`.izq`)
const carrouselContainer = document.querySelector(`.Lowcost-grid--ul`)
const carrouselImgs      = document.querySelectorAll(`.Lowcost-img`)

let anchoImg = 100/2.5 / carrouselImgs.length


next.addEventListener(`click` , ()=>{
      foto++
      if( foto >= carrouselImgs.length ){
            foto = 0
      }
      carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`
})

prev.addEventListener(`click`, ()=>{
      foto --
      if (foto <= -1){
            foto = carrouselImgs.length -1
      }
      carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`    
})



// Este fragmento de cógigo permite mostrar u ocultar el menú hambuguesa
// Al hacer click en el botón, se le añade la clase Active en css, que le aporta opacidad 1 y pointer events auto

const hambur  = document.querySelector(`.Header-hambur`)
const menu = document.querySelector(`.Header-responsive`)

hambur.addEventListener(`click`,()=>{
    menu.classList.toggle(`Active`)
})