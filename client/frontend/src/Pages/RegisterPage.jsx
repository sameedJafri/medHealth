import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div>
      <h1>
        <span style={{ color: "green" }}>Med</span>
        <span style={{ color: "#dddaa4" }}>Health</span>
      </h1>

      <div className="login-wrap">
            <div className="card">
                <form className="login-form">
                    <p className="title">Creat an Account</p>
                    <div className="flex">
                        <input placeholder="First Name" type="text" />
                        <input placeholder="Last Name" type="text" />
                    </div> <br />
           
                    <div className="flex">
                        <input placeholder="Age" type="number" />
                        <input placeholder="Weight (kg)" type="number" />
                    </div><br />
            
                    <div className="flex">
                        <input placeholder="Gender" type="text" />
                        <input placeholder="height (cm)" type="number" />
                    </div><br />
            
                    <input className="size" placeholder="Email" type="email" /><br />
            
                    <input className="size" placeholder="Password" type="password" /><br />
            
                    <div>
                        <button className="submit size btn" type="submit"> Sign Up </button>
                        <p className="signin"> Already have an account ? <a href="/">Sign in</a>{" "}</p>
                    </div>
                 </form>
            </div>
        </div>
    </div>
  );
}
export default RegisterPage;
