
import './App.css';
import MyRGBBPanel from './components/MyRGBBPanel';
import MyCalculator from './components/MyCalculator';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MyRGBBPanel</h1>
        <MyRGBBPanel />
        <h2>My Calculator</h2>
        <MyCalculator />
      </header>
    </div>
  );
}

export default App;
