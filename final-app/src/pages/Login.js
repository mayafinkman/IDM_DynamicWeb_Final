import React from "react";
import LoginForm from '../components/LoginForm';
function Login({ LoginFunction }) {
    return <div className="Wrapper">
     <h1>Login</h1>
        <LoginForm LoginFunction={LoginFunction} />
        <h3 className="keepReading">Don't have an account? <a href="/create-account">Sign up here.</a></h3>
</div>;
            
    
}
export default Login;