import React, { useEffect, useState } from 'react';
import axios from "axios";
import CreatePostForm from "../components/CreatePostForm";


function Home({ userInformation }) {
    const email = userInformation.email;
    const uID = userInformation.userID;
    const [allPosts, setAllPosts] = useState([]);   

    useEffect(() => {
        axios.get(
            //local
            `http://localhost:4000`
            //production
            //heroku link
        )
            .then(function(response){
                setAllPosts(response.data);
                console.log(allPosts);
            })
            .catch(function(error) {
                console.log(error);
            });      
    }, []);

    return (
        <div className="Wrapper">
            <h1>Welcome, {email} </h1>
            
            <h2>All Posts</h2>
            <div>
                {allPosts.map((post, i) => (
                    <p key={i}>{post.text}</p>  
            ))}
            </div>
        </div>
    )
}
export default Home;