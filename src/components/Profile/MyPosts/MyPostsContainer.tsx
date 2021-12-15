import React from 'react';
import {PostType,UpdateNewPostTextAC, AddPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapSatePropsType = {
   posts:PostType[],
    newPostText:string,
    }

 type MapDispatchPropsType = {
        updateNewPostText: (newText: string) => void,
        addPost: () => void,
            }

            export type MyPostsPropsType = MapSatePropsType & MapDispatchPropsType

const mapStateToProps = (state:RootStateType):MapSatePropsType=> {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        updateNewPostText: (newPostText:string) => {
            dispatch(UpdateNewPostTextAC(newPostText))
        },

        addPost: () => {
            dispatch(AddPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)//Настраиваю 2 функциями и указываю компоненту MyPosts

export default MyPostsContainer;


