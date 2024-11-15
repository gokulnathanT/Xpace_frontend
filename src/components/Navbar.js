
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
import "./Navbar.css"
function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-image">
                <img src={logo} id="logo" alt="logo"/>
            </div>
            <div className="nav-buttons">
                <nav>
                    <ul className="navbar">
                        <li className="nav-item"><a className="nav-link" href="/">Home </a></li>
                        <li className="nav-item"><a className="nav-link" href="/Dashboard">Dashboard</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Journeys">Journey</a></li>
                        <li className="nav-item" id="signIn"><a className="nav-link" href="/">Sign In</a></li>
                        <li className="nav-item" id="signUp"><a className="nav-link" href="/">Sign Up</a></li>
                    </ul>
                    
                </nav>
                    
            </div>
                
        </div>
    )
}
export default Navbar;