let selectedImg = document.querySelector('#selected-img')
let sneakers2 = document.querySelector('#sneakers-2')
let sneakers1 = document.querySelector('#sneakers-1')
let sneakers3 = document.querySelector('#sneakers-3')

function changeImage2(path) {
    selectedImg.src=path

    sneakers2.classList.add('selected')
    sneakers1.classList.remove('selected')
    sneakers3.classList.remove('selected')
}

function changeImage1(path) {
    selectedImg.src=path

    sneakers1.classList.add('selected')
    sneakers2.classList.remove('selected')
    sneakers3.classList.remove('selected')
}

function changeImage3(path) {
    selectedImg.src=path

    sneakers3.classList.add('selected')
    sneakers1.classList.remove('selected')
    sneakers2.classList.remove('selected')
}