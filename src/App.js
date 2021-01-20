import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Songpage from "./pages/Songpage";
import Victorychartpage from "./pages/Victorychartpage";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/songlist">Songlist</Link>
                        </li>
                        <li>
                            <Link to="/victorychart">Victory chart</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <Aboutpage />
                    </Route>
                    <Route path="/songlist">
                        <Songpage />
                    </Route>
                    <Route path="/victorychart">
                        <Victorychartpage />
                    </Route>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;