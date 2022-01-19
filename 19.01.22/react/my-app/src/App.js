import './App.css';

function App() {
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
    </>
  );
}

export default App;
