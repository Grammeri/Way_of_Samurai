import {ActionsTypes} from "./profile-reducer";
import {AppStateType, DialogsPageType} from "./state";

export type AddPostProps = {
    addPost: (message: string) => void
}

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body //у Димыча нет dialogsPage
            return state;

        case "SEND-MESSAGE":
            let body = state.newMessageBody; //у Димыча нет dialogsPage
            state.newMessageBody = ""; //у Димыча нет dialogsPage
            state.messages.push({id: 6, message: body}); //у Димыча нет dialogsPage
            return state;
        default:
            return state;
    }
}

export const UpdateNewMessageBodyCreator = (body: string) => ({ type: "UPDATE-NEW-MESSAGE-BODY", body } as const)
export const AddPostAC = () => ({type: "ADD-POST"} as const)

export default dialogsReducer;