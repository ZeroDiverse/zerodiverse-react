import React, {useState} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const openMenu = () => {
    setMenuOpenState(!menuOpenState);
  }

  return (
    <Router>
      <div className="App">
        <header><Navbar menuOpen={menuOpenState} onMenuOpen={openMenu}/></header>
        <Switch>
          <Route path="/" exact children={() => <Home menuOpen={menuOpenState} onMenuOpen={openMenu}/>} />
          <Route path="/contact" exact children={() => <Contact menuOpen={menuOpenState} onMenuOpen={openMenu}/>} />
          <Route path="*" children={() => <Contact menuOpen={menuOpenState} onMenuOpen={openMenu}/>} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
