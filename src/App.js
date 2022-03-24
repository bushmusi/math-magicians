// import Calculator from './component/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="ResultBox InputBox">
        <h3>0</h3>
      </div>

      <div className="AC InputBox">
        <button type="button">AC</button>
      </div>

      <div className="InputBox">
        <button type="button">+/-</button>
      </div>

      <div className="InputBox">
        <button type="button">%</button>
      </div>

      <div className="InputBox LeftBtn">
        <button type="button">/</button>
      </div>

      <div className="InputBox">
        <button type="button">7</button>
      </div>

      <div className="InputBox">
        <button type="button">8</button>
      </div>

      <div className="InputBox">
        <button type="button">9</button>
      </div>

      <div className="InputBox LeftBtn">
        <button type="button">*</button>
      </div>
    </div>
  );
}

export default App;
