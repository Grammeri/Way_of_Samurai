import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, SendMessageCreator} from "../../redux/profile-reducer";
import {DialogsPageType} from "../../redux/store";
import {UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {RootStateType, StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
   }

function DialogsContainer(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage;
    // let state = props.store.dialogsPage;


    const onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }

    const onNewMessageChange = (body:string) => {
        props.store.dispatch(UpdateNewMessageBodyCreator(body))
    }
    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
    />
}

export default DialogsContainer;











