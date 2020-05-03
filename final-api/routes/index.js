const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");

const db = firebase.firestore();
const posts = db.collection("posts");

router.get("/", (req, res) => {
    const postsArray = [];
    posts
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //push document into array every time the query loops over existing articles 
                postsArray.push(doc.data());
            });
            return res.send(postsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        
        });

});

module.exports = router;