import {ActionsTypes, DialogsPageType} from "./profile-reducer";

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
            return {
                ...state,
                newMessageBody: action.body
            }

        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : "",
                messages:[...state.messages,{id: 6, message: body} ]
            }

        default:
            return state;
    }
}

export const UpdateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const
export const SendMessageCreator = () => ({type: "SEND-MESSAGE"}) as const


export default dialogsReducer;