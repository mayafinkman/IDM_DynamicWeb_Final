const express = require('express'); 

const app = express();
const port = process.env.PORT || 4000; 

const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyBy0mO327kPsTvdoto2iMTVQlH0Xu84Bv8",
    authDomain: "dwa-final-project.firebaseapp.com",
    databaseURL: "https://dwa-final-project.firebaseio.com",
    projectId: "dwa-final-project",
    storageBucket: "dwa-final-project.appspot.com",
    messagingSenderId: "844133394035",
    appId: "1:844133394035:web:08f9262f9816f9af1e2c06"
  };
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");

//serve static files
app.use("/static", express.static("public"));

//routing in express
app.use("/", indexRoute);

app.listen(port, () => console.log("Final Project API is running"));

