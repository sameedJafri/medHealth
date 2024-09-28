import './RegisterPage.css';


function RegisterPage(){

    return(
    <div className="registration-form">
      <form className="form" onSubmit={(e) => registerAccount(e)}>
        <p className="title">Create an Account </p>
        <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
          <input type="checkbox" id="filter" checked={isInstructor} onChange={() => setIsInstructor(!isInstructor)} />
          <span>STUDENT</span>
          <span>INSTRUCTOR</span>
        </label>

        <div className="flex">
          <FormInput fieldName={"Firstname"} fieldType={"text"} setField={setFirstname} />
          <FormInput fieldName={"Lastname"} fieldType={"text"} setField={setLastname} />
        </div>
        <FormInput fieldName={"Email"} fieldType={"email"} setField={setEmail} />
        <FormInput fieldName={isInstructor ? "Instructor ID" : "Student ID"} fieldType={"text"} setField={setUserID} />
        <FormInput fieldName={"Password"} fieldType={"password"} setField={setPassword} isPasswordValid={isPasswordValid} />
        <FormInput fieldName={"Confirm Password"} fieldType={"password"} setField={setConfirmPassword} isPasswordValid={isPasswordConfirmed} />
        <button disabled={!submitEnabled} className="submit" type='submit'>Sign Up</button>
        <p className="signin">Already have an account ? <a href="/loginAccount">Sign in</a> </p>
      </form>
    </div>
    );
}
export default RegisterAccountPage;