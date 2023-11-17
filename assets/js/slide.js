'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]')
const navNextButton = document.querySelector('[data-slide="nav-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelector('[data-slide="item"]')
const controlButton = document.querySelectorAll('[data-slides="control-button"]')
let startingPoint

function onMouseDown(event) {
    const slideItem = event.currentTarget
    startingPoint = event.clientX
    slideItem.addEventListener('mousemove', onMouseMove)
    console.log('ponto de partida', startingPoint)
    //console.log('apertei o botão do mouse', index) 
}
function onMouseMove(event) {
    const movement = event.clientX - startingPoint
    console.log('pixel do mousemove',event.clientX,'-', 'ponto de partida', startingPoint, ' = ', movement)
    slideList.style.transform = 'translateX('+movement+'px)'
}
function onMouseUp(event) {
    const slideItem = event.currentTarget
    slideItem.removeEventListener('mousemove', onMouseMove)
    //console.log('soltei o botão do mouse', index)
}



slideItems.arr?.forEach.forEach(function(slideItem, index) {
    slideItem.addEventListener('dragstart', function(event) {
        event.preventDefault()
    })
    slideItems.addEventListener('mousedown', onMouseDown) 
      slideItem.addEventListener('mouseup', onMouseUp)

})