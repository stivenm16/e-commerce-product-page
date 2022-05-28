import { emptyCart } from "./quantity.js"
const cartModal = document.getElementById('cart-modal')
const addCartBtn = document.getElementById('add-cart')
const cartHeader =document.querySelector('#cart-header')
import { quantity, counter, quantityCart, total, price, totalPrice, updateStateEmpty } from "./quantity.js"


export function openCartModal() {
    updateStateEmpty()
    emptyCart() 
    cartModal.classList.toggle('active')
    
    quantity.textContent = counter
    quantityCart.textContent = `$ ${price} x ${counter}`
    total.textContent = ` $ ${totalPrice}`
    emptyCart()
}

addCartBtn.addEventListener('click', openCartModal)
cartHeader.addEventListener('click', openCartModal)
