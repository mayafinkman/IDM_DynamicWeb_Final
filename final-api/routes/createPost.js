const express = require("express");
const router = express.Router();
//include fire base
const firebase = require("firebase");
//initialize firestore database
const db = firebase.firestore();
//create reference to collection
const posts = db.collection("posts");
// /create
router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const queryParams = req.query;
    posts
        .doc(queryParams.id)
        .set(queryParams)
        .then(function (doc) {
            res.send({success: "successful submission"} );
        })
        .catch(function (error) {
        console.log("Error", error);
        res.send(`Error Submitting:" ${error.toString()}`);
    });
});

module.exports = router;