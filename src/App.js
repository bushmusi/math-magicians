import { Route, Switch } from 'react-router-dom';
import Calculator from './components/pages/calculator/Calculator';
import Header from './components/Header';
import './App.css';
import './App.scss';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Header />
          <div className="App" id="GridContainer">
            <Calculator />
          </div>
        </Route>
      </Switch>
    </>

  );
}

export default App;
