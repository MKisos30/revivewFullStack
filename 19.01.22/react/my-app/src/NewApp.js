import React from 'react'

function NewApp() {

const image = {src:'https://picsum.photos/200'}

function user(obj) {
    return `${obj.name} is from ${obj.city} and she is ${obj.age} years old`
}

function adult(obj) {
    if (obj) {
        if (obj.name) {
            return <p>{`${obj.name} is from ${obj.city} and she is ${obj.age} years old`}</p>
        } else {
            return <p>name is empty</p>
        }
    } else {
        return <p>obj is empty</p>
    }

    if (image) {
        return <img src={image.src} alt='text' />
    } else {
        return <p>there is no image</p>
    }
}

const obj = {name: 'Golda', city: 'Holon', age: 27}

return(
    <>
    {/* <p>{obj.name} is from {obj.city} and she is {obj.age} years old</p> */}
    {/* <p>{user(obj)}</p> */}
    {/* {adult()} */}
    {adult(obj)}
    </>
)

}

export default NewApp;