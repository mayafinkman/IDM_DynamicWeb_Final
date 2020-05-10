import React from 'react';

function LoginForm({LoginFunction}) {
    return <div className="Wrapper">
        <form className="signupForm Form" onSubmit={(e) =>LoginFunction(e)}>
            <label htmlFor="loginEmail">Email</label>
            <input type="text" name="loginEmail" />
            <label htmlFor="loginPassword">Password</label>
            <input type="password" name="loginPassword" />
            <button>Submit</button>
        </form>
    </div>;
}

export default LoginForm;