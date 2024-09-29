import './Medicine.css';
import NavBar from './Components/NavBar';


function Medicine() {

    const handleSubmit = () => {
        const drugName = document.getElementById('drugName').value;
        const dosage = document.getElementById('dosage').value;
        const frequency = document.getElementById('frequency').value;

        const medicalInfo = {
            drugName,
            dosage,
            frequency
        };

        localStorage.setItem('medicalInfo', JSON.stringify(medicalInfo));
        alert('Medical information saved successfully!');
    };

    return (
        <div className="wraper">
            <NavBar />
            <h1 style={{ marginTop: '40px', color: 'green' }}>Upload a Photo of your medical prescription</h1>
            <div className="wrap">
                <div className="border-wrap">
                    <label className="form-label" htmlFor="customFile">Please upload a photo of your medical prescriptions</label><br />
                    <input type="file" className="form-control" id="customFile" /><br />
                </div>
                <div className="border-wrap">
                    <label className="form-label" htmlFor="medInfo">Or manually input your medical information</label><br />
                    <input type="text" className="form-control" id="drugName" placeholder="Drug Name" /><br />
                    <input type="text" className="form-control" id="dosage" placeholder="Dosage" /><br />
                    <input type="text" className="form-control" id="frequency" placeholder="Frequency" /><br />
                </div>
                <input type="button" className="submit-button" value="Submit" onClick={handleSubmit} />
            </div>
        </div>
    )


}
export default Medicine;