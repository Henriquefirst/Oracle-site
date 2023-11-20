'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]')
const navNextButton = document.querySelector('[data-slide="nav-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelector('[data-slide="item"]')
const controlButton = document.querySelectorAll('[data-slides="control-button"]')

let startingPoint = 0
let savedPosition = 0
let currentPoint  = 0
let movement = 0
let currentSlideIndex = 0

function onMouseDown(event, index) {
    const slideItem = event.currentTarget
    startingPoint = event.clientX
    currentPoint = event.clientX - savedPosition
    currentSlideIndex = index
    console.log(currentSlideIndex)
    slideItem.addEventListener('mousemove', onMouseMove)
}
function onMouseMove(event) {
    const movement = event.clientX - startingPoint
    const position = event.clientX - currentPoint
    console.log('pixel do mousemove',event.clientX,'-', 'ponto de partida', startingPoint, ' = ', movement)
    console.log('pixel do mousemove',event.clientX,'-', 'ponto atual', currentPoint, ' = ', position)
    slideList.style.transform = 'translateX('+movement+'px)'
}
function onMouseUp(event) {
    const slideItem = event.currentTarget
    slideItem.removeEventListener('mousemove', onMouseMove)
    //console.log('soltei o botão do mouse', index)
}



slideItems.forEach(function(slideItem, index) {
    slideItem.addEventListener('dragstart', function(event) {
        event.preventDefault()
    })
    slideItem.addEventListener('mousedown', function(event) {
    onMouseDown(event, index)
    } )
      slideItem.addEventListener('mouseup', onMouseUp)

})