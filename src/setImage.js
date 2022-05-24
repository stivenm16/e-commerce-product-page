const largeImg = document.querySelector('.largeOne')
const small1 = document.getElementById('1')
const small2 = document.getElementById('2')
const small3 = document.getElementById('3')
const small4 = document.getElementById('4')
let idClicked 


function setImage() { 
    largeImg.src = `./images/image-product-${idClicked}.jpg`
}
function changeId(i) {
    idClicked = this.id
    setImage()
}

small1.addEventListener('click', changeId)
small2.addEventListener('click', changeId)
small3.addEventListener('click', changeId)
small4.addEventListener('click', changeId)

export {setImage, changeId}