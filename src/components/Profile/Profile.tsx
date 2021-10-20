import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";
import ProfileInfo from './Profileinfo/Profileinfo';
import {ProfilePageType} from "../../redux/store";
import {ActionsTypes} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    //addPost: (message: string) => void
    //updateNewPostText: (newText: string) => void
    dispatch:(action:ActionsTypes)=>void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                //addPost = {props.addPost}
                //updateNewPostText={props.updateNewPostText}

            />
        </div>
    )
}

export default Profile;
