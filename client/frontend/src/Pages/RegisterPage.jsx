import './RegisterPage.css';


function RegisterPage(){

    return (
        <div className="registration-form">
          <form className="form">
            <p className="title">Create an Account </p>
            
            <div className="flex">
              <input type = "text" />
              <input type = "text" />
            </div>
            <input type = "email" />
            <input type="password"/>
            <button className="submit" type='submit'>Sign Up</button>
            <p className="signin">Already have an account ? <a href="/">Sign in</a> </p>
          </form>
        </div>
      );
}
export default RegisterPage;