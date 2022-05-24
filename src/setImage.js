const largeImg = document.getElementsByClassName('.large-image')
const small1 = document.getElementById('1')
const small2 = document.getElementById('2')
const small3 = document.getElementById('3')
const small4 = document.getElementById('4')
const smallOne = '1'
const smallTwo = '2'
const smallThree = '3'
const smallFour = '4'
let idClicked = '1'
console.log(parseInt(small2.id))

function changeImage(i) {

    console.log(idClicked)
}
function setImage() {
    largeImg.src = `../images/image-product-${idClicked}-thumbnail.jpg`
    console.log('Hola 2')
}

small1.addEventListener('click', setImage)
small1.addEventListener('click', changeImage)
small2.addEventListener('click', setImage)
small2.addEventListener('click', changeImage)
small3.addEventListener('click', setImage)
small3.addEventListener('click', changeImage)
small4.addEventListener('click', setImage)
small4.addEventListener('click', changeImage)

export {setImage, changeImage}