import {setImage, changeImage}  from './setImage.js'

const btnAdd = document.querySelector('.btn-add')
const btnRmv = document.querySelector('.btn-rmv')
let quantity = document.querySelector('.quantity')

let counter = 0
function addItem() {
    counter++
    quantity.textContent = counter
}

function rmvItem() {
    if (counter <= 0) {
        return
    } else {
        counter--
    }
    quantity.textContent = counter
}
btnAdd.addEventListener('click', addItem)
btnRmv.addEventListener('click', rmvItem)


