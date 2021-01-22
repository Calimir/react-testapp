import { Link } from "react-router-dom";
import "../CSS/navigation.css";

function Navigation() {
    return (
        <div className="navigationWrapper">
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
        </div>
    );
}

export default Navigation;