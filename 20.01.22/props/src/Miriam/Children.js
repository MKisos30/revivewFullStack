import React from "react";

function Children(props) {

    const child = props.child


return (
    <>

        <h1>name: {child.name}</h1>
        <h2>age: {child.age}</h2>
    </>
)
}

export default Children;