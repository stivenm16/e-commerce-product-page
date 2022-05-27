const btnAdd = document.querySelector('.btn-add')
const btnRmv = document.querySelector('.btn-rmv')
let quantity = document.querySelector('.quantity')

export let counter = 0
export function addItem() {
    counter++
    quantity.textContent = counter
}

export function rmvItem() {
    if (counter <= 0) {
        return
    } else {
        counter--
    }
    quantity.textContent = counter
}
btnAdd.addEventListener('click', addItem)
btnRmv.addEventListener('click', rmvItem)
