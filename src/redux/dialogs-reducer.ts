import {ActionsTypes} from "./profile-reducer";
import {AppStateType, DialogsPageType} from "./store";

export type AddPostProps = {
    addPost: (message: string) => void
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you!"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes):DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body //dialogsPage приходит под именем state
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