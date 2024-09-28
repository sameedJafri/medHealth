import './Restrictions.css';
import NavBar from './Components/NavBar';
import InputField from './Components/InputField'

function Restrictions(){

    return (
        <div className = "content-wrap">
            <NavBar/>
            <h1>Please Add Any Diatery Restrictions and/or Allergies</h1>
            <div className = "user-intput">
               <InputField/>
            </div>
        </div>
      );
}
export default Restrictions;