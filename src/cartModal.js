const addCartBtn = document.getElementById('add-cart')
const cartModal = document.getElementById('cart-modal')
let quantity = document.querySelector('.cart-quantity')
import { counter } from "./quantity.js"

quantity.textContent = `$125.00 x ${counter}`
export function prueba() {
    cartModal.classList.toggle('active')
}

addCartBtn.addEventListener('click', prueba)