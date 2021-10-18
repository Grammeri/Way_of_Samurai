import {SendMessageCreator, UpdateNewPostTextAC} from "./profile-reducer";
import {AppStateType} from "./state";

export type AddPostProps = {
    addPost: (message: string) => void
}

export type ActionsTypes =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof UpdateNewMessageBodyCreator> |
    ReturnType<typeof SendMessageCreator>
type SendMessageCreatorType = ReturnType<typeof SendMessageCreator>


const dialogsReducer = (state: AppStateType, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.dialogsPage.newMessageBody = action.body
            return state;
        case "SEND-MESSAGE":
            let body = state.dialogsPage.newMessageBody;
            state.dialogsPage.newMessageBody = ""
            state.dialogsPage.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const UpdateNewMessageBodyCreator = (body: string) => ({ type: "UPDATE-NEW-MESSAGE-BODY", body } as const)
export const AddPostAC = () => ({type: "ADD-POST"} as const)

export default dialogsReducer;