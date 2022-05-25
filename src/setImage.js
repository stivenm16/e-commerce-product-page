export const largeImg = document.querySelector('.largeOne')
export const containerSmall = [...document.querySelectorAll('.card-small-image')]
const smallSelected = [...document.querySelectorAll('.small')]
const small1 = document.getElementById('1')
const small2 = document.getElementById('2')
const small3 = document.getElementById('3')
const small4 = document.getElementById('4')
let idClicked = 4
smallSelected.src = `./images/image-product-${idClicked}-thumbnail.jpg`

function setImage() { 
    largeImg.src = `./images/image-product-${idClicked}.jpg`
}

function selectSmallOne() {
    
    containerSmall[idClicked - 1].classList.toggle('card-small-image-selected')
    smallSelected[idClicked - 1].classList.toggle('small-selected')
    
}

function unSelectedSmall() {
    for (let i = 0; i < containerSmall.length; i++) {
        if (containerSmall[i].classList.contains('card-small-image-selected')){
            containerSmall[i].classList.toggle('card-small-image-selected')
            smallSelected[i].classList.toggle('small-selected')
        }
    }
}

function changeId(i) {
    idClicked = this.id
    unSelectedSmall()
    selectSmallOne()
    setImage()
}


small1.addEventListener('click', changeId)
small2.addEventListener('click', changeId)
small3.addEventListener('click', changeId)
small4.addEventListener('click', changeId)

export {setImage, changeId, selectSmallOne, unSelectedSmall, idClicked}