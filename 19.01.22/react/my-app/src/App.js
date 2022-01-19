import './App.css';

function App() {
  
  function click () {
    console.log('hi')
  }

  return (
    <>
      <button onClick={click}>click on me</button>
    </>
  );
}

export default App;
