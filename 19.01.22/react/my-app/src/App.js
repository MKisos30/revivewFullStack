import './App.css';
import NewApp from './NewApp';
// import {....} from ....
// import .... from ....

function App() {

  // function click () {
  //   console.log('hi')
  // }

  // return (
  //   <>
  //     <button onClick={click}>click on me</button>
  //   </>
  // );

  // function nameUser(user) {
  //   return `${user.name} likes ${user.hobbies}`
  // }

  // function getText(user) {
  //   if(user) {
  //     return <div>{nameUser(user)}</div>
  //   } else {
  //     return <div>There is no user</div>
  //   }
  // }

  // const user1 = {
  //   name: "Matilda",
  //   hobbies: "walk"
  // }

  // const name = `Miriam`
  // const element = <h1>Hi {name}!</h1>

  return (
    <>
      <NewApp/>
      {/* {element} */}
      {/* <div>{user.name} like {user.hobbies}</div> */}
      {/* <div>{nameUser(user1)}</div> */}
      {/* <div>{getText()}</div> */}
    </>
  )
}

export default App;
