import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './CSS/App.css';
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";
import Songpage from "./pages/Songpage";
import Victorychartpage from "./pages/Victorychartpage";

function App() {
    return (
        <Router>
            <Navigation />
            <div className="contentWrapper">
                <Switch>
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