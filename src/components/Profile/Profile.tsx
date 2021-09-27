import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";
import ProfileInfo from './Profileinfo/Profileinfo';
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;