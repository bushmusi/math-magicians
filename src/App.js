import { Route, Switch } from 'react-router-dom';
import Calculator from './components/pages/calculator/Calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import './App.css';
import './App.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <div className="CalcContainer">
            <div className="caclTitle">
              <h2>Let as do some math!!!</h2>
            </div>
            <div className="App" id="GridContainer">
              <Calculator />
            </div>
          </div>
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </>

  );
}

export default App;
