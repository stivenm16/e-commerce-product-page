const deleteItem = document.querySelector('.cart-delete')
const cartDescription = document.querySelector('.cart-description-container')
export let quantityCart = document.querySelector('.cart-quantity')
export let total = document.querySelector('.cart-total')
const btnAdd = document.querySelector('.btn-add')
const btnRmv = document.querySelector('.btn-rmv')
export let quantity = document.querySelector('.quantity')

export let price = '125.00'
export let counter = 0
quantityCart.textContent = `$ ${price} x ${counter}`
export let totalPrice = parseInt(price) * counter

export function updateStateEmpty() {
    if (quantity == 0) {
        cartDescription.classList.add('active')
    }
}

export function addItem() {
    counter++
    totalPrice = parseInt(price) * counter
    quantity.textContent = counter
    quantityCart.textContent = `$ ${price} x ${counter}`
    total.textContent = ` $ ${totalPrice}`
    
}
export function emptyCart() {
    if (counter <= 0) {
        quantityCart.textContent = ''
        total.textContent = 'Your cart is empty.'
    }
}
export function rmvItem() {
    

    if (counter <= 0) {
        emptyCart()
    } else {
        counter--
        totalPrice = parseInt(price) * counter
        quantityCart.textContent = `$ ${price} x ${counter}`
        total.textContent = ` $ ${totalPrice}`
        if (counter == 0) {
            emptyCart()
        }
    }
    quantity.textContent = counter
}

btnAdd.addEventListener('click', addItem)
btnRmv.addEventListener('click', rmvItem)
deleteItem.addEventListener('click', rmvItem)


