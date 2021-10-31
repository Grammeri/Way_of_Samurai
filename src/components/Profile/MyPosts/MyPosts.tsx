import React, {Props} from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import {
    ActionsTypes,
 /*   AddPostActionType,*/

    UpdateNewPostTextAC,
   /* UpdateNewPostTextActonType*/
} from "../../../redux/profile-reducer";
import {PostType} from "../../../redux/store";
import {AddPostAC} from "../../../redux/dialogs-reducer";

export type MyPostsPropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes)=>void
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
           props.addPost() //Corrections TS

        // if(newPostElement.current){
        //     props.addPost(newPostElement.current.value)
        // }

           /* props.dispatch(AddPostAC());*/
    }


    let onPostChange = () => {
        let newPostText = newPostElement.current?.value
        if (newPostText) {
            props.updateNewPostText(newPostText);
           //У Димыча
/*            let newPostText = newPostElement.current?.value
            props.UpdateNewPostText(newPostText)*/
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


