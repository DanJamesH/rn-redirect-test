import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {

  function openInNewTab(url) {
    var win = window.open("myapp://home", '_blank');
    if (win != null) {
      win.focus();
    }
  }

  useEffect(() => {
    setTimeout(() => openInNewTab(),1000)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and saveeee to reload.
        </p>
        <a
          className="App-link"
          href="myapp://home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
