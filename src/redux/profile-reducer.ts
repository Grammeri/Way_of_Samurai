import {AddPostAC, UpdateNewMessageBodyCreator} from "./dialogs-reducer";
import {AppStateType, PostType, ProfilePageType} from "./store";


export type AddPostProps = {
    addPost: (message: string) => void
}

export type ActionsTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>

type SendMessageCreatorType = ReturnType<typeof SendMessageCreator>

let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "My god", likesCount: 19},
        ],
        newPostText: "it-kamasutra"
    }

const profileReducer = (state: ProfilePageType = initialState, action:ActionsTypes)=>{

    switch (action.type){
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);//profilePage приходит под именем state
            state.newPostText = "";//profilePage приходит под именем state
            return state;

        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;//profilePage приходит под именем state
            return state;
        default:
            return state;
    }
}

export const UpdateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const
export const SendMessageCreator = () => ({type: "SEND-MESSAGE"}) as const

export default profileReducer;