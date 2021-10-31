import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import {ProfilePageType} from "../../redux/store";
import {ActionsTypes} from "../../redux/profile-reducer";
import {RootStateType, StoreType} from "../../redux/redux-store";


export type ProfilePropsType = {
    // profilePage: ProfilePageType
    //addPost: (message: string) => void
    //updateNewPostText: (newText: string) => void
    // dispatch:(action:ActionsTypes)=>void
    store:StoreType
}

function Profile(props: ProfilePropsType) {

        return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer   store={props.store}
                              /*posts={props.profilePage.posts}
                                newPostText={props.profilePage.newPostText}
                                dispatch={props.dispatch}*/
                                //addPost = {props.addPost}
                                //updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;
