import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';



function App() {

  
  return (

      <>
        <Router>
          <Navbar />
          <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/privacy-policy' component={() => { 
                window.location.href = 'https://example.com/1234'; 
                return null;
                }}/>
          </Switch>
        </Router>
      </>

  );
}

export default App;
