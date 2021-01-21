import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../CSS/navigation.css";
import Homepage from "./Homepage";
import Songpage from "./Songpage";
import Victorychartpage from "./Victorychartpage";

function Navigation() {
    return (
        <Router>
            <div className="wrapper">
                <nav>
                    <div className="navItem">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="navItem">
                        <Link to="/songlist">Songlist</Link>
                    </div>
                    <div className="navItem">
                        <Link to="/victorychart">Victory chart</Link>
                    </div>
                </nav>

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
        </Router>);
}

export default Navigation;