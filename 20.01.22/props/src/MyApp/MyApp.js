import React from "react";

function MyApp() {

    const image = {src:"https://picsum.photos/200", alt:"image-of-picsumImage"}

    function image() {
        if (image) {
            console.log({image})
        } else {
            console.log('there is no image to show')
        }
    }

    return (

        <div>
            <img src={image.src} alt={image.alt} />
            <p>hy</p>
        </div>
    )
}

export default MyApp;