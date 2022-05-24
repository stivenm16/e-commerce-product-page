import { largeImg } from "./setImage.js";
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')

export function openMainModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
    console.log('prueba')
}
export function closeMainModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
    console.log('prueba')
}

largeImg.addEventListener('click', openMainModal)
closeBtn.addEventListener('click',closeMainModal)