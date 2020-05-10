import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const [postData, setPostData] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(
            //local
            `http://localhost:4000/posts/${id}`
            //production
            //heroku link
        )
            .then(function(response){
                setPostData(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });      
    }, []);

    return (
        <div className="SinglePost Wrapper">
            <p>${postData}</p>
        </div>
    )
}
export default SinglePost;