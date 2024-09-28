import './Styles/NavBar.css';

function NavBar() {

    //const [userLoggedIn, setUserLoggerIn] = useState(false);

    return (
        <div id="navbar">
            <div className="nav-sub">
                <li>
                    <a href="/Home"> Welcome </a>
                </li>
                <li>
                    <a href="/MedicineList"> Medicine List</a>
                </li>
                <li>
                    <a href="/Emotions"> Track Emotions</a>
                </li>
                <li>
                    <a href="/Restrictions"> Allergies restrictions</a>
                </li>
            </div>
            <div className="nav-sub">
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