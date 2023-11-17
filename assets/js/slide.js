'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]')
const navNextButton = document.querySelector('[data-slide="nav-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelector('[data-slide="item"]')
const controlButton = document.querySelectorAll('[data-slides="control-button"]')


function onMouseDown() {
    console.log('apertei o botão do mouse', index) 
    slideItem.addEventListener('mousemove', onMouseMove)
}
function onMouseMove(event) {
    console.log('movimentei o mouse em cima do elemento',)
}
function onMouseUp(event) {
    slideItem.removeEventListener('mousemove', onMouseMove)
    console.log('soltei o botão do mouse', index)
}



slideItems.arr?.forEach.forEach(function(slideItem, index) {
    slideItem.addEventListener('dragstart', function(event) {
        event.preventDefault()
    })
    slideItems.addEventListener('mousedown', onMouseDown) 
      slideItem.addEventListener('mouseup', onMouseUp)

})