import { counter } from "./quantity.js"

const addCartBtn = document.getElementById('add-cart')
const cartModal = document.getElementById('cart-modal')
let quantity = document.querySelector('.cart-quantity')
let total = document.querySelector('.cart-total')
const cartHeader =document.querySelector('#cart-header')

export let price = '125.00'

export function openCartModal() {
    cartModal.classList.toggle('active')
    let totalPrice = parseInt(price) * counter
    quantity.textContent = `$ ${price} x ${counter}`
    total.textContent = ` $ ${totalPrice}`
}


addCartBtn.addEventListener('click', openCartModal)
cartHeader.addEventListener('click', openCartModal)