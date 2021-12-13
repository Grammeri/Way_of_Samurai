import {SendMessageCreator, UpdateNewPostTextAC} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";




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

export type ActionsTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>




/*type SendMessageCreatorType = ReturnType<typeof SendMessageCreator>*/

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "My god", likesCount: 19},
    ],
    newPostText: "it-kamasutra",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action:ActionsTypes):ProfilePageType=> {

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


export const AddPostAC = () => ({type: "ADD-POST"})as const
export const setUserProfile = (profile:null) => ({type: "SET-USER-PROFILE", profile})as const
export const UpdateNewMessageBodyCreator = (body: string) => ({ type: "UPDATE-NEW-MESSAGE-BODY", body })as const


export default profileReducer;