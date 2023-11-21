var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementByld('radio1').checked = true

setInterval(() => {
     proximaimg()
}, 5000)

function proximaimg(){
    cont++

    if(cont > 3){
          cont = 1
    }

    document.getElementByld('radio'+cont).checked = true
}