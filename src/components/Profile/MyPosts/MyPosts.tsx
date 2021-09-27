import React, {Props} from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: MyPostsPropsType) {
    console.log('newPostText: ', props.newPostText)
    const postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = "";
        }
        /* props.updateNewPostText("");*/
    }


    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
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
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


/* let posts = [
        {id: 1, message: "Hi, how are you?", likesCount:12},
        {id: 2, message: "It's my first post", likesCount:11},
        {id: 2, message: "My god", likesCount:19},
       ]*/

/*if (newPostElement.current) {
            alert(newPostElement.current.value)
        }*/
/*   {alert(newPostElement.current && newPostElement.current.value)}*/
/* props.addPost(newPostElement?.current?.value)*/
/* if(newPostElement.current){*/
/* props.addPost(newPostElement.current.value)*/