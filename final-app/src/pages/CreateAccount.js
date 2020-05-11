import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import logo from "../logo.png"

function CreateAccount({CreateAccountFunction}) {
    return (
        <div className="Wrapper">
            <h1>Create Account</h1>
            <div className="CreateWrapper">
            <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>
                <div className="CreateInformation">
                    <img src={logo}></img>
                    <h2>About Quarantivities</h2>
                    <p>Welcome to Quarantivity! Here is the place for you to get and spread new quarantine activities! You can create an account to post and read about quarantine actitvites. Hear the best reccomendations of things to do from fellow isolationists, while also posting your own reccomendations of the best activities! </p>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;