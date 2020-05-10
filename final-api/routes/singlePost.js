//Import express
const express = require('express');
const router = express.Router();

//initiate express to app
const app = express();
//require firebase
const firebase = require("firebase");

//initialize firestore database
const db = firebase.firestore();


//create reference to collection
const posts = db.collection("posts");

router.get("/", (req, res) => res.send("Please include ID"));

//get single blog post
router.get("/:id", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const queryId = req.params.id;
    posts
        .doc(queryId)
        .get()
        .then(function (doc) {
            if (doc.exists) {
                return res.send(doc.data());
            }
            else {
                return res.send("no such document!");
            }
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});
    
module.exports = router;