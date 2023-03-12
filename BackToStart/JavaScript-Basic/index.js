/*
type of value -
string, number, boolean, array, object, null, undifind, NaN.
*/

/* const, let, var - 
const key = value */

/* 
    alert() - alert about something (true)
    confirm() - accept or dicline ( true or false)
    prompt() - get information from user (info)
*/

// prompt()
// const answer = +prompt("hy, how are you?")
// const answer1 = Number(prompt("hy, how are you?"))
// console.log(typeof answer)
//  console.log(answer)
// console.log(answer1)

// if(answer === NaN ){
//     alert("it is a string")
// } else {
//     alert("it is a number")
// }

// const something = confirm("Are you okey?")
// console.log(something)

/* TYPE OF FUNCTIONS */
/* 1 - anunimy function*/
() => {

}

/* 2 - arrow function */
const func = () => {

}

/* 3 - regular function */
function func1(parameter){
    //parameter is what the function get

    if(!parameter){
        return false
    }

    return true

    //the regular function can get *this*
} 