import Homepage from "./Homepage";
import Songpage from "./Songpage";
import Victorychartpage from "./Victorychartpage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Navigation() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
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