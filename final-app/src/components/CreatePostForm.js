import React from 'react';

function CreatePostForm( {createPostFunction}) {
    return (
        <div className="Wrapper">
            <form className="Form CreatePost" onSubmit={(e) =>createPostFunction(e)}>
                <label htmlFor="postTitle">Title of Post</label>
                <input type="title" name="postTitle" />
                <label htmlFor="postText">Text</label>
                <textarea type="text" name="postText" />
                <label htmlFor="postName">Your Name</label>
                <input type="name" name="postName" />
                <button>Submit</button>
        </form>
        </div>
    )
}
export default CreatePostForm;