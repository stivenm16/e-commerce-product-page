export let quantityCart = document.querySelector('.cart-quantity')
export let total = document.querySelector('.cart-total')
export let quantity = document.querySelector('.quantity')
const deleteItem = document.querySelector('.cart-delete')
const cartCheckout = document.querySelector('.cart-checkout')
const cartDescription = document.querySelector('.cart-description-container')
const shortDescription = document.querySelector('.cart-description')
const btnAdd = document.querySelector('.btn-add')
const btnRmv = document.querySelector('.btn-rmv') 
const cartImg = document.querySelector('.cart-img')

export let price = '125.00'
export let counter = 0
quantityCart.textContent = `$ ${price} x ${counter}`
export let totalPrice = parseInt(price) * counter


console.log(deleteItem.src)
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
    deleteItem.src = './images/icon-delete.svg'
    cartCheckout.classList.remove('active')
    cartImg.classList.remove('active')
    shortDescription.classList.remove('active')
    total.classList.remove('active')
    shortDescription.textContent = 'Fall Limited Edition Sneakers'

}
export function emptyCart() {
    if (counter <= 0) {
        quantityCart.textContent = ''
        total.textContent = 'Your cart is empty.'
        shortDescription.textContent = ''
        total.classList.add('active')
        deleteItem.src = ''
        cartCheckout.classList.add('active')
        cartImg.classList.add('active')
        shortDescription.classList.add('active')
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


