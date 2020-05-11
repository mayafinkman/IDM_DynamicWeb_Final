import React from 'react';
import logo from '../logo-wide.png';

function Header({ LogoutFunction, isLoggedIn }) {
    //console.log("logged in is " + isLoggedIn);
    return (
        <header className="Header">
            <div className="Header_Wrapper">
                <div className="Header_Logo">
                    <a href="/">
                        <img src={logo}></img>
                    </a>
                </div>
                <nav className="Header__nav">
                    {isLoggedIn && <a href="/profile">Post Something!</a>}
                    {!isLoggedIn && <a href="/create-account">Create account</a>}
                    {!isLoggedIn && <a href="/login">Login</a>}
                    {isLoggedIn && <a href="" onClick={() => LogoutFunction()}>Log out</a>}
                </nav>
                </div>
        </header>
    );
}
export default Header;