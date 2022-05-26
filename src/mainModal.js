import { containerSmall, setImage, largeImg, idClicked } from "./setImage.js";
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const containerSmallModal = containerSmall.slice(4)
const largeImgModal = document.getElementsByClassName('large-One-Modal')
let nextId = idClicked


function setImgModal() {
    largeImgModal[0].src = `./images/image-product-${idClicked}.jpg`
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

largeImg.addEventListener('click', openMainModal)
closeBtn.addEventListener('click',closeMainModal)
function changeImg(change) {

    nextId += change 
    
    
    if (nextId === 0|| nextId == containerSmallModal.length + 1){
        nextId = nextId === 0 ? containerSmallModal.length : 1
    }
    largeImgModal[0].src = `./images/image-product-${nextId}.jpg`

}

nextBtn.addEventListener('click',  () => changeImg(1))
prevBtn.addEventListener('click',  () => changeImg(-1))
