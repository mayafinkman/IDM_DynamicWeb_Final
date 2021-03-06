import React from "react";
import axios from "axios";
import CreatePostForm from '../components/CreatePostForm';
function CreatePost({ userInformation }) {

    const email = userInformation.email;
    const uID = userInformation.userID; 

    //create a post
    function createPostFunction(e) {
        e.preventDefault();
        let text = e.currentTarget.postText.value;
        const idFromText = text.replace(/\s+/g, "-").toLowerCase().substr(0, 16);
        let userId = uID;
        let postTitle = e.currentTarget.postTitle.value;
        let postUserName = e.currentTarget.postName.value;
            axios.get(
                //local
                //`http://localhost:4000/create?text=${text}&id=${idFromText}&userId=${userId}&title=${postTitle}&name=${postUserName}`
                //production
                `https://peaceful-thicket-79386.herokuapp.com/create?text=${text}&id=${idFromText}&userId=${userId}&title=${postTitle}&name=${postUserName}`
            )
                .then(function (response) {
                    console.log('response', response);
                })
                .catch(function(error) {
                    console.log(error);
                });      
    }



    return <div className="Wrapper">
         <h1 class="Welcome">Welcome, {email} </h1>
            <div className="CreatePost">
                <h2> Add a post</h2>
                <CreatePostForm createPostFunction={createPostFunction}/>
            </div>
</div>;
            
    
}
export default CreatePost;