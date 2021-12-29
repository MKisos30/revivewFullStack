const button = document.querySelector('button')
const img = document.querySelector('.image')

//---------FIRST EX-------//
// document.getElementsByClassName('img')

// console.log(buttton)

// button.addEventListener('click', function () {
//     img.style.display = "block"
//     button.style.display = "none"
// })

// img.addEventListener('click', () => {
//     img.style.display = "none"
//     button.style.display = "block"
// })

// -------SECOND EX-------//
// button.addEventListener("click", () => {
//     img.classList.toggle('isBig')
// })

// ----------THIRD EX---------//
button.addEventListener("click", hendleChengeImg)

function hendleChengeImg() {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWQT5tUV3pkyiai1EnGcgrqRvVzxg7xtBHg&usqp=CAU"
}

