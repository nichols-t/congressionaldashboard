import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/app.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
