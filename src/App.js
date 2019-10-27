import React from 'react';
import Navigation from './Navigation';
import History from './History';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router
      forceRefresh={true}  >
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/History" exact component={History} />
          <Route path="/" component={()=><div>Erreur 404</div>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
