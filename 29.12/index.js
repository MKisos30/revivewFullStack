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
// button.addEventListener("click", hendleChengeImg)

// function hendleChengeImg() {
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWQT5tUV3pkyiai1EnGcgrqRvVzxg7xtBHg&usqp=CAU"
// }

// const div1 = document.querySelector("#one")
// const div2 = document.querySelector("#two")
// const div3 = document.querySelector("#tree")



// button.addEventListener('click', () => {
//     div2.scrollIntoView({
//         behavior: 'smooth', //default: auto
//         block: 'end', //start, center, end, nearest //default:start //יישור אנכי
//         inline: 'center' //start, center, end, nearest //default:nearest //יישור אופקי
//     })
// })

// const up = document.querySelector(".up")

// up.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// })

// let scrollPosition = 0;
// window.addEventListener('scroll', () => {
//     scrollPosition = window.scrollY;
//     console.log(scrollPosition)

//     if (scrollPosition > 1000) {
//         div2.style.background = "red";
//     } else if (scrollPosition < 1000) {
//         div2.style.background = "blue";
//     }
// })

// button.addEventListener('dblclick', function (e) {
//     button.classList.toggle('large');
// });

// const text = document.querySelector('#text');
// const input = document.querySelector('input');
// const log = document.getElementById('log');

// window.addEventListener('keyup', hendleKey)


// function hendleKeyUp(event) {
//     // console.log(event)//we can see the "key"
//     console.log(event.code) //event.key

//     text.innerHTML += `<p>${event.code}</p>`
// }

// function hendleKey(event) {
//     if (event.code == 'ArrowUp') {
//         text.innerHTML += "<p>&uarr;</p>"
//     } else if (event.code == 'ArrowDown') {
//         text.innerHTML += "<p>&darr;</p>"

//     } else if (event.code == 'ArrowLeft') {
//         text.innerHTML += "<p>&rarr;</p>"

//     } else if (event.code == 'ArrowRight') {
//         text.innerHTML += "<p>&larr;</p>"
//     } else {
//         text.innerHTML += `<p>${event.code}</p>`
//     }
// }

// const key = 5;

// document.getElementById('text').innerHTML = `The key is ${key}`
//  "the key is " + key

// const div = document.querySelector("div")

// div.addEventListener('mouseenter', () => {
//     div.style.backgroundColor = "green";
// })


    // div.addEventListener('mouseout', () => {
    //     div.style.backgroundColor = "blue";

    //     setTimeout(() => {
    //         div.style.backgroundColor = "brown";
    //     }, 500)
    // })

    // MINE
    const div = document.querySelector("div")

    div.addEventListener('mouseenter', () => {
        div.style.visibility = "hidden";
    })

    div.addEventListener('mouseout', () => {
        div.style.visibility = "visible";
        div.style.backgroundColor = "green";
    
        setTimeout(() => {
           div.style.backgroundColor = "brown";
        }, 5000)
    })
