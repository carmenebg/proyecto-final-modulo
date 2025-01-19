// Con este codigo se muetra y se oculta un menú que permite acceder de forma rápida a la sección donde se encuentra la información.
const filtro = document.querySelector(`.Filtro-ul`)
const boton = document.querySelector(`.Filtro-button`)


boton.addEventListener(`click`, ()=>{
    filtro.classList.toggle(`isActive`)
})





// Este fragmento de cógigo permite mostrar u ocultar el menú hambuguesa
// Al hacer click en el botón, se le añade la clase Active en css, que le aporta opacidad 1 y pointer events auto
const hambur  = document.querySelector(`.Header-hambur`)
const menu = document.querySelector(`.Header-responsive`)

hambur.addEventListener(`click`,()=>{
    menu.classList.toggle(`Active`)
})