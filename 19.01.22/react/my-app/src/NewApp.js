import React from 'react'

function NewApp() {

const obj = {name: 'Golda', city: 'Holon', age: 27}

return(
    <>
    <p>{obj.name} is from {obj.city} and she is {obj.age} years old</p>
    </>
)

}

export default NewApp;