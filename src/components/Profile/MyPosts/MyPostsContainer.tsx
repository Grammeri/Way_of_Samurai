import React from 'react';

import {
    ActionsTypes,
 /*   AddPostActionType,*/
    UpdateNewPostTextAC,
   /* UpdateNewPostTextActonType*/
} from "../../../redux/profile-reducer";
import {PostType} from "../../../redux/store";
import {AddPostAC} from "../../../redux/dialogs-reducer";
import MyPosts from "./MyPosts";
import {RootStateType, StoreType} from "../../../redux/redux-store";
import StoreContext from '../../../StoreContext';


export type MyPostsPropsType = {
    // posts: PostType[]
    //addPost: (message: string) => void
    // newPostText: string
    //updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes)=>void
    // store:StoreType
}

function MyPostsContainer(props: MyPostsPropsType) {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(AddPostAC());
                    }

                    let onPostChange = (newPostText: string) => {
                        store.dispatch(UpdateNewPostTextAC(newPostText));
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>

                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;


