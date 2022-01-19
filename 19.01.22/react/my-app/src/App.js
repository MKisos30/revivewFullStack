import './App.css';

function App() {
<<<<<<< HEAD
  const user = {
    name:"Matilda",
    hobbies:"walk"
  }

  const name = `Miriam`
  const element = <h1>Hi {name}!</h1>

  return (
    <>
    {element}
    <div>{user.name} like {user.hobbies}</div>
=======
  
  function click () {
    console.log('hi')
  }

  return (
    <>
      <button onClick={click}>click on me</button>
>>>>>>> c82914a5c214f01b220bc590de6dcb890789b12c
    </>
  );
}

export default App;
