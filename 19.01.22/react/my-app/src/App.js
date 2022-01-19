import './App.css';
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

  const user = {
    name: "Matilda",
    hobbies: "walk"
  }

  const name = `Miriam`
  const element = <h1>Hi {name}!</h1>

  return (
    <>
      {element}
      <div>{user.name} like {user.hobbies}</div>
    </>
  )
}

export default App;
