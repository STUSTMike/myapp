import './App.css';
import MyRGBBPanel from './components/RGB-Panel/MyRGBBPanel';
import MyCalculator from './components/Calculator/MyCalculator';
import Square from './components/tic-tac-toe/Square';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MyRGBBPanel</h1>
        <MyRGBBPanel />
        <h2>My Calculator</h2>
        <MyCalculator />
        <h1>Tic-Tac-Toe Game</h1>
        <Square/>
      </header>
    </div>
  );
}

export default App;
