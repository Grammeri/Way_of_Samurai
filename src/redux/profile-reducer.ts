import {AddPostAC, UpdateNewMessageBodyCreator} from "./dialogs-reducer";
import {AppStateType, PostType} from "./state";


export type AddPostProps = {
    addPost: (message: string) => void
}

export type ActionsTypes =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof UpdateNewMessageBodyCreator> |
    ReturnType<typeof SendMessageCreator>
type SendMessageCreatorType = ReturnType<typeof SendMessageCreator>


const profileReducer = (state: AppStateType, action:ActionsTypes)=>{
    switch (action.type){
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            };
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.profilePage.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const UpdateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const
export const SendMessageCreator = () => ({type: "SEND-MESSAGE"}) as const

export default profileReducer;