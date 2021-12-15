import React, {} from "react";
import {DialogsPageType} from "../../redux/profile-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

export type MapSatePropsType = {
    dialogsPage: DialogsPageType
}
export type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void,
    sendMessage: (newText: string) => void,
}

    let mapStateToProps = (state:RootStateType): MapSatePropsType=> {
    return{
dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return{
        updateNewPostText: (message:string)=>{
            dispatch(UpdateNewMessageBodyCreator(message))//We dispatch action provided by AC
        },
        sendMessage:(newText:string)=>{
            dispatch(SendMessageCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;











