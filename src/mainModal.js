import { containerSmall, largeImg, idClicked, smallSelected, changeId } from "./setImage.js";
const containerSmallModal = [...document.querySelectorAll('.card-small-image-Modal')]
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const small1Modal = document.getElementById('5')
const small2Modal = document.getElementById('6')
const small3Modal = document.getElementById('7')
const small4Modal = document.getElementById('8')
const largeImgModal = document.getElementsByClassName('large-One-Modal')
let idClickedModal = idClicked
let nextId = idClickedModal

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

function changeImg(change) {
    nextId += change 
    console.log(containerSmallModal)
    if (nextId === 0|| nextId == containerSmallModal.length + 1){
        nextId = nextId === 0 ? containerSmallModal.length : 1
    }
    largeImgModal[0].src = `./images/image-product-${nextId}.jpg`
    
}
function changeIdModal(i) {
    idClickedModal = this.id - 4
    // console.log(idClickedModal)
    unSelectedSmallModal()
    selectSmallOneModal(i)
    largeImgModal[0].src = `./images/image-product-${idClickedModal}.jpg`
    // setImgModal()
}



function selectSmallOneModal(i) {
    // console.log(containerSmallModal)
    containerSmallModal[idClickedModal - 1].classList.toggle('card-small-image-Modal-selected')

    // smallSelected[idClickedModal - 1].classList.toggle('small-selected')
    
}

function unSelectedSmallModal() {
    for (let i = 0; i < containerSmallModal.length; i++) {
        if (containerSmallModal[i].classList.contains('card-small-image-Modal-selected')){
            containerSmallModal[i].classList.toggle('card-small-image-Modal-selected')
            // smallSelected[i].classList.toggle('small-selected')
        }
    }
}


largeImg.addEventListener('click', openMainModal)
closeBtn.addEventListener('click',closeMainModal)
nextBtn.addEventListener('click',  () => changeImg(1))
prevBtn.addEventListener('click',  () => changeImg(-1))
small1Modal.addEventListener('click', changeIdModal)
small2Modal.addEventListener('click', changeIdModal)
small3Modal.addEventListener('click', changeIdModal)
small4Modal.addEventListener('click', changeIdModal)

