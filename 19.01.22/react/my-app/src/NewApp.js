import React from 'react'

function NewApp() {

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
}

const obj = {name: 'Golda', city: 'Holon', age: 27}

return(
    <>
    {/* <p>{obj.name} is from {obj.city} and she is {obj.age} years old</p> */}
    {/* <p>{user(obj)}</p> */}
    {adult()}
    </>
)

}

export default NewApp;