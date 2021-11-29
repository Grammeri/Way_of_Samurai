import {AddPostAC, UpdateNewMessageBodyCreator} from "./dialogs-reducer";
/*import {AppStateType, PostType, ProfilePageType} from "./store";*/
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";


export type PostType = { id: number, message: string, likesCount: number }

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
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

export type StoreType = {
    _state: AppStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
    dispatch: (action: ActionsTypes) => void //Когда придет action, мы раздадим нужные подчасти отдельным Reducers
    //и собирем результат в новый оъект, который и будет результатом нашего action
}

export type AddPostProps = {
    addPost: (message: string) => void
}

export type ActionsTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

type SendMessageCreatorType = ReturnType<typeof SendMessageCreator>

let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "My god", likesCount: 19},
        ],
        newPostText: "it-kamasutra"
    }

const profileReducer = (state: ProfilePageType = initialState, action:ActionsTypes):ProfilePageType=> {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ""
            }

            return state;

        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText : action.newText
            }

            return state;

        default:
            return state;
    }
}

export const UpdateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const
export const SendMessageCreator = () => ({type: "SEND-MESSAGE"}) as const


export default profileReducer;