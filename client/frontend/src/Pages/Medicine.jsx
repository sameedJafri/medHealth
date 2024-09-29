import './Medicine.css';
import NavBar from './Components/NavBar';


function Medicine() {
   
    return (
        <div className = "wraper">
            <NavBar/>
            <div className = "wrap">
            <label class="form-label" for="customFile">Please upload a photo of your medical prescriptions</label><br/>
            <input type="file" class="form-control" id="customFile" />
            <br/>
            <input type= "button" className = "submit"value = "Submit"/>
            </div>
        </div>
    )
    
}
export default Medicine;