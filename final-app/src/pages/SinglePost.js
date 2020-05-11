import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const [postData, setPostData] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(
            //local
            //`http://localhost:4000/posts/${id}`
            //production
            `https://peaceful-thicket-79386.herokuapp.com/posts/${id}`
        )
            .then(function(response){
                setPostData(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });      
    }, []);

    return (
        <div className="SinglePostWrapper">
            <h1>{postData.title}</h1>
            <h3>By {postData.name}</h3>
            <p>{postData.text}</p>
        </div>
    )
}
export default SinglePost;