import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import history from './history';
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Background from './app/components/background/background.js'
import LandingPage from './app/views/landing-page.js';

function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
        <div className="app-content">
          <Route exact path="/" component={LandingPage}/>
        </div>
      </Router>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
