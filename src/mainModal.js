import { containerSmall, setImage, largeImg, idClicked } from "./setImage.js";
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const containerSmallModal = containerSmall.slice(4)
const largeImgModal = document.getElementById('large-One-Modal')


function setImgModal() {
    largeImgModal.src = `./images/image-product-${idClicked}.jpg`
}
export function openMainModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
    closeBtn.classList.add('active')
    setImgModal()
}
export function closeMainModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
    closeBtn.classList.remove('active')
}

console.log(idClicked)
console.log(containerSmallModal)

largeImg.addEventListener('click', openMainModal)
closeBtn.addEventListener('click',closeMainModal)

function prueba() {
    console.log(idClicked)
}

nextBtn.addEventListener('click', prueba)

// prevBtn.addEventListener('click', () => changePosition(1))
// nextBtn.addEventListener('click', () => changePosition(-1))

// function changePosition(change){
//     const currentElement = Number(document.querySelector('.slider_body--show').dataset.id)
        
//     value = currentElement
//     value += change
//     if (value === 0 || value == sliders.length + 1){
//         value = value === 0 ? sliders.length : 1
//         }
//         sliders[currentElement-1].classList.toggle('slider_body--show')
//         sliders[value-1].classList.toggle('slider_body--show')
//     }