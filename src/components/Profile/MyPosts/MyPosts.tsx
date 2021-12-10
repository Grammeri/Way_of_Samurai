import React from "react";
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


function MyPosts(props: MyPostsPropsType) {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
           props.addPost()
    }


    let onPostChange = () => {
        let newPostText = newPostElement.current?.value
        if (newPostText) {
            props.updateNewPostText(newPostText);
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


