const deleteItem = document.querySelector('.cart-delete')
let quantityCart = document.querySelector('.cart-quantity')
let total = document.querySelector('.cart-total')
const btnAdd = document.querySelector('.btn-add')
const btnRmv = document.querySelector('.btn-rmv')
let quantity = document.querySelector('.quantity')

export let price = '125.00'
export let counter = 0
quantityCart.textContent = `$ ${price} x ${counter}`

export function addItem() {
    counter++
    let totalPrice = parseInt(price) * counter
    quantity.textContent = counter
    quantityCart.textContent = `$ ${price} x ${counter}`
    total.textContent = ` $ ${totalPrice}`

}
export function rmvItem() {
    if (counter <= 0) {
        return
    } else {
        counter--
        let totalPrice = parseInt(price) * counter
        quantityCart.textContent = `$ ${price} x ${counter}`
        total.textContent = ` $ ${totalPrice}`
    }
    quantity.textContent = counter
}

btnAdd.addEventListener('click', addItem)
btnRmv.addEventListener('click', rmvItem)
deleteItem.addEventListener('click', rmvItem)


