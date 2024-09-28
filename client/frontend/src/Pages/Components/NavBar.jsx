import './Styles/NavBar.css';

function NavBar() {

    //const [userLoggedIn, setUserLoggerIn] = useState(false);

    return (
        <div id="navbar">
            <div className="nav-sub">
                <li>
                    <a href="/Home"> Profile </a>
                </li>
                <li>
                    <a href="/Medicine"> Medicine List</a>
                </li>
                <li>
                    <a href="/Emotions"> Track Emotions</a>
                </li>
                <li>
                    <a href="/Restrictions"> Allergies restrictions</a>
                </li>
                <li>
                    <a href="/Exercise"> Exercises</a>
                </li>
            
                <li>
                    <a href="/"> Login </a>
                </li>
                <li>
                    <a href="/RegisterPage"> Sign Up </a>
                </li>
            </div> 
        </div>
    );
}

export default NavBar;