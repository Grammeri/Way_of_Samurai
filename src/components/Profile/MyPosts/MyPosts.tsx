import React, {Props} from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import {ActionsTypes, PostType} from "../../../redux/state";


export type MyPostsPropsType = {
    posts: PostType[]
    //addPost: (message: string) => void
    newPostText: string
    //updateNewPostText: (newText: string) => void
    dispatch:(action:ActionsTypes)=>void
}

function MyPosts(props: MyPostsPropsType) {
    const postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            props.dispatch({type:"ADD-POST"});
    }


    let onPostChange = () => {
        let newPostText = newPostElement.current?.value
        if (newPostText) {
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: newPostText});
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

/*if(newPostElement.current){
 props.addPost(newPostElement.current.value)*/