import './Medicine.css';
import NavBar from './Components/NavBar';


function Medicine() {
   
    return (
        <div className = "wraper">
            <NavBar/>
            <h1 style={{marginTop:'40px', color:'green'}}>Upload a Photo of your medical prescription</h1>
            <div className = "wrap">
                <div class = "border-wrap">
            <label class="form-label" for="customFile">Please upload a photo of your medical prescriptions</label><br/>
            <input type="file" class="form-control" id="customFile" />
            <br/>
            </div>
            <input type= "button" className = "submit-button"value = "Submit"/>
            </div>
        </div>
    )
    
}
export default Medicine;