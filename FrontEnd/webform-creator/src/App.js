import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import CreateWebForm from './components/createWebForm';
import SavedWebForms from './components/savedWebforms';
import FAQ from './components/FAQ';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route path="/create-web-form" component={CreateWebForm} />
          <Route path="/saved-web-forms" component={SavedWebForms} />
          <Route path="/faq" component={FAQ} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;
