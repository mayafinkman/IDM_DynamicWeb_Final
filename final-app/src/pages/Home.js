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
            //`http://localhost:4000`
            //production
            `https://peaceful-thicket-79386.herokuapp.com/`
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
            <h1 class="Welcome">Welcome, {email} </h1>
            
            <h2 class="Welcome">Here are all the ways people have been staying sane during quarantine</h2>
            <h3 class="Welcome">Click each title to view the post in more detail</h3>
            <h5 class="Welcome">Want to add yours? Go to <a href="/profile"> "Post Something!" </a> to give your reccomendation!</h5>
            <div class="allPosts">
                {allPosts.map((post, i) => (
                    <div>
                       <a class="allPosts_Title" key={i} href={`/posts/${post.id}`}>
                       {post.title}
                        </a>  
                        <h4 key={i}>By {post.name}</h4>
                        <p key={i}>{String(post.text).substring(0, ((post.text).length)/3)} <a class="keepReading" key={i} href={`/posts/${post.id}`}>... keep reading</a> </p>  
                    </div>
            ))}
            </div>
        </div>
    )
}
export default Home;