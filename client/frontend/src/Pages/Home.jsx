import './Home.css';
import NavBar from './Components/NavBar';


function Home(){

    return (
        <div className = "content-wrap">
            <NavBar/>
            <p>Hello this will be the welcome page</p>
        </div>
      );
}
export default Home;