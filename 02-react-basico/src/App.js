import './App.css';
import Component01 from './Component01';
import Component02 from './Component02';
import Calculation from './Calculation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component01/>
        <Component02/>
        <Calculation/>
      </header>
    </div>
  );
}

export default App;
