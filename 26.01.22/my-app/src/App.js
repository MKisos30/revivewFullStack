import './App.css';
import { listName } from './ListNames'

function App() {



  return (
    <>
      { listName.map(item => 
        <div>
          {item.name}
        </div>
      )}
    </>
  );
}

export default App;
