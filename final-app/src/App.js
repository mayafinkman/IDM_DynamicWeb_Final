import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import * as firebase from "firebase/app"; 
import "firebase/auth";
//Pages
import CreateAccount from "./pages/CreateAccount";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import CreatePost from './pages/CreatePost';
//styling
import "./App.css";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); //dont want to display info before ready
  const [userInformation, setUserInformation] = useState({});

  const firebaseConfig = {
    apiKey: "AIzaSyBy0mO327kPsTvdoto2iMTVQlH0Xu84Bv8",
    authDomain: "dwa-final-project.firebaseapp.com",
    databaseURL: "https://dwa-final-project.firebaseio.com",
    projectId: "dwa-final-project",
    storageBucket: "dwa-final-project.appspot.com",
    messagingSenderId: "844133394035",
    appId: "1:844133394035:web:08f9262f9816f9af1e2c06"
  };

  //ensure app is initialized when it is ready to be
  useEffect(() => {
    //ensure firebase is not initialized more than once
    if (!firebase.apps.length) { //if there is no length, then initialize
      //initialize firebase
      firebase.initializeApp(firebaseConfig);
    }
    //setting auth to be persistent in SESSION storage, not cookies
    //you can also use cookies with firebase but we are using session storage because it is easier to work with 
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function (e) {
        console.log("Instantiating AUTH ERROR");
      });
  }, [firebaseConfig]);

  // Cheack to see if user is logged in
  //user loads page, check their status, set state accordingly
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      //logged in
      if (user) {
        setUserInformation(user);
        setLoggedIn(true);
      }
      //not logged in
      else {
        setUserInformation({});
        setLoggedIn(false);
      }
      setLoading(false);
    })
  }, []);
   //login
   function LoginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      })
  }

  //logout
  function LogoutFunction() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false)
      })
      .catch(function (error) {
        console.log("LOGOUT ERROR", error);
      })
  }

  //create account
  function CreateAccountFunction(e) {
    e.preventDefault(); //prevents form from submitting as default form
    //console.log("form payload", e);
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    // console.log('email', email);
    // console.log('password', password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATE", response);
        setLoggedIn(true);
      })
      .catch(function (e) {
        console.log("CREATE ACCOUNT ERROR", e);
      })
  }
  if (loading) return null;

  return (
    <div className="App">
      <Header LogoutFunction={LogoutFunction} isLoggedIn={loggedIn} />
      <Router>
      <Route exact path="/">
          {//!loading &&
            !loggedIn ? (<Redirect to="/login" />
            ) : ( 
                < Home userInformation={userInformation} />)
          }
        </Route>
        <Route exact path="/profile">
          {//!loading &&
            !loggedIn ? (<Redirect to="/login" />
            ) : ( 
                < CreatePost userInformation={userInformation}/>)
          }
        </Route>
        <Route exact path="/posts/:id">
          {//!loading &&
            !loggedIn ? (<Redirect to="/login" />
            ) : (
                < SinglePost  />)
          }
        </Route>
        <Route exact path="/login">
          {//!loading &&
            !loggedIn ? (<Login LoginFunction={LoginFunction} />
            ) : (
                <Redirect to="/" />)
          }
        </Route>
        <Route exact path="/create-account">
          {//!loading && 
            !loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (<Redirect to="/"/>)
          }
        </Route>
        </Router>
    </div>
  );
}

export default App;
