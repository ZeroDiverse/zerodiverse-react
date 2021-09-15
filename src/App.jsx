import React, {Suspense, useState} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import './i18n/i18n';
import {LoopCircleLoading} from 'react-loadingg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Home = React.lazy(() => import('./components/Home/Home'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));


function App() {
    const [menuOpenState, setMenuOpenState] = useState(false);

    const openMenu = () => {
        setMenuOpenState(!menuOpenState);
    }

    return (
        <Router>
            <Suspense fallback={<LoopCircleLoading color={"#207BE6"}/>}>
                <div className="App">
                    <header><Navbar menuOpen={menuOpenState} onMenuOpen={openMenu}/></header>
                    <Switch>
                        <Route path="/" exact children={() =>
                            <Home menuOpen={menuOpenState} onMenuOpen={openMenu}/>
                        }/>
                        <Route path="/contact" exact
                               children={() =>
                                   <Contact menuOpen={menuOpenState} onMenuOpen={openMenu}/>
                               }
                        />
                        <Route path="*" children={() => <Contact menuOpen={menuOpenState} onMenuOpen={openMenu}/>}/>
                    </Switch>
                </div>
            </Suspense>
        </Router>

    );
}

export default App;
