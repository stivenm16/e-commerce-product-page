const cartModal = document.getElementById('cart-modal')
const addCartBtn = document.getElementById('add-cart')
const cartHeader =document.querySelector('#cart-header')


export function openCartModal() {
    cartModal.classList.toggle('active')
}

addCartBtn.addEventListener('click', openCartModal)
cartHeader.addEventListener('click', openCartModal)
