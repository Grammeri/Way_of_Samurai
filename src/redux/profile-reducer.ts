import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type PostType = { id: number, message: string, likesCount: number }

export type ProfileType = {
    userId: number,
    fullName: string,
    photos: {
        small: string | null,
        large: string | null
    }
    lookingForAJobDescription: string
    aboutMe: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
}

export type DialogsPageType = {
    dialogs: { id: number, name: string }[],
    messages: { id: number, message: string }[]
    newMessageBody: string
}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfileReducerActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof setUserProfile>


/*type ProfileActionsType = ReturnType<typeof AddPostAC> | ReturnType<typeof setUserProfile> | ReturnType<typeof UpdateNewMessageBodyCreator>*/

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "My god", likesCount: 19},
    ],
    newPostText: "it-kamasutra",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action:ProfileReducerActionsTypes):ProfilePageType=> {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }

        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE":{
            return {...state, profile: action.profile}
            }
        default:
            return state;
    }
}


export const AddPostAC = () => ({type: "ADD-POST"} as const)
export const setUserProfile = (profile:null) => ({type: "SET-USER-PROFILE", profile} as const)

export const getUserProfile = (userId:number) => (dispatch:Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const UpdateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}as const)


export default profileReducer;