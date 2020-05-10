import React from 'react';

function CreatePostForm( {createPostFunction}) {
    return (
        <div className="Wrapper">
            <form className="Form" onSubmit={(e) =>createPostFunction(e)}>
                <label htmlFor="postTitle">Title of Post</label>
                <input type="title" name="postTitle" />
                <label htmlFor="postText">Text</label>
                <input type="text" name="postText" />
                <button>Submit</button>
        </form>
        </div>
    )
}
export default CreatePostForm;