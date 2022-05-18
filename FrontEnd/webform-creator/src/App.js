import React from 'react';
import './App.css';
import SavedWebForms from './components/savedWebforms';
import FAQ from './components/FAQ';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import CreateWebForm from './components/CreateWebForm/CreateWebForm';
import WebFormTemplates from './components/WebFormTemplates/WebFormTemplates';
import SideBar from './components/Sidebar/sidebar';
import Logout from './components/Logout/logout';
import Settings from './components/Settings/settings';
import NavBar from './components/NavBar/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
      <div className="container">
        <Switch>
          <Route path="/create-webform" component={CreateWebForm} />
          <Route path="/saved-webforms" component={SavedWebForms} />
          <Route path="/webform-templates" component={WebFormTemplates} />
          <Route path="/faq" component={FAQ} />
          <Route path="/settings" component={Settings} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;
