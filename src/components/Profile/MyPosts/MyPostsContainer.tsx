import React from 'react';

import {
    ActionsTypes, PostType,
    /*   AddPostActionType,*/
    UpdateNewPostTextAC,
    /* UpdateNewPostTextActonType*/
} from "../../../redux/profile-reducer";

import {AddPostAC} from "../../../redux/dialogs-reducer";
import MyPosts from "./MyPosts";
import {RootStateType, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {Dispatch} from "redux";

/*
export type MyPostsPropsType = {
    // posts: PostType[]
    //addPost: (message: string) => void
    // newPostText: string
    //updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes)=>void
    // store:StoreType
}*/

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


