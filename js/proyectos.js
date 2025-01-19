
// Este código tiene como objetivo cambiar el estilo del puntero cuando se pasa sobre los elementos con la clase Click, utilizando la clase Hover
const boton = document.querySelector(`.Hero-button`)
console.log(boton)

const click = document.querySelectorAll(`.Click`)



click.forEach((_, i) => {
  click[i].addEventListener(`mouseover`, () => {
    pointer.classList.add(`Hover`)
  })
})

click.forEach((_, i) => {
  click[i].addEventListener(`mouseout`, () => {
    pointer.classList.remove(`Hover`)
  })
})


// EN ESTA PARTE DE CÓDIGO SE HA USADO INTELIGENCIA ARTIFICIAL (no me funcionaba utilizando el mismo i para los dos forEach)
// El propósito de este código es que, al hacer clic en un botón de navegación, este botón se resalte visualmente (añadiendo la clase Active), mientras que los demás botones de navegación dejan de estar resaltados.

const navButtons = document.querySelectorAll('.Navegacion-button');

navButtons.forEach((_, i) => {
  navButtons[i].addEventListener('click', () => {
    navButtons.forEach((_, j) => {
      navButtons[j].classList.remove('Active');
    });

    navButtons[i].classList.add('Active');
  });
});



//Este código permite filtrar y mostrar diferentes categorías de contenido en la página al hacer clic en los botones correspondientes, ocultando o mostrando los elementos relacionados con la categoría seleccionada. 
//Para añadir las categorías se han empleado clases en HTML
const todoBtn = document.querySelector(`.Todo-button`)
const vivBtn = document.querySelector(`.Viviendas-button`)
const obraBtn = document.querySelector(`.Obra-button`)
const equiBtn = document.querySelector(`.Equipamiento-button`)

const obra = document.querySelectorAll(`.Obra`)
const equi = document.querySelectorAll(`.Equi`)
const viv = document.querySelectorAll(`.Viv`)

todoBtn.addEventListener('click', () => {
  obra.forEach((_, i) => {
    obra[i].style.display = 'grid'
  })
  equi.forEach((_, i) => {
    equi[i].style.display = 'grid'
  })

  viv.forEach((_, i) => {
    viv[i].style.display = 'grid'
  })
})

vivBtn.addEventListener('click', () => {
  obra.forEach((_, i) => {
    obra[i].style.display = 'none'
  })
  equi.forEach((_, i) => {
    equi[i].style.display = 'none'
  })

  viv.forEach((_, i) => {
    viv[i].style.display = 'grid'
  })
})

equiBtn.addEventListener('click', () => {
  obra.forEach((_, i) => {
    obra[i].style.display = 'none'
  })
  viv.forEach((_, i) => {
    viv[i].style.display = 'none'
  })

  equi.forEach((_, i) => {
    equi[i].style.display = 'grid'
  })
})

obraBtn.addEventListener('click', () => {
  viv.forEach((_, i) => {
    viv[i].style.display = 'none'
  })
  equi.forEach((_, i) => {
    equi[i].style.display = 'none'
  })

  obra.forEach((_, i) => {
    obra[i].style.display = 'grid'
  })
})




// Este fragmento de cógigo permite mostrar u ocultar el menú hambuguesa
// Al hacer click en el botón, se le añade la clase Active en css, que le aporta opacidad 1 y pointer events auto
const hambur = document.querySelector(`.Header-hambur`)
const menu = document.querySelector(`.Header-responsive`)

hambur.addEventListener(`click`, () => {
  menu.classList.toggle(`Active`)
})