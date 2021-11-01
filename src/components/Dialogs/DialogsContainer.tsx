import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, SendMessageCreator} from "../../redux/profile-reducer";
import {DialogsPageType} from "../../redux/store";
import {UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {RootStateType, StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
   }

function DialogsContainer(props: DialogsPropsType) {

    return <StoreContext.Consumer>
        {  (store) =>{
           /* let state = store.getState().dialogsPage;*/
            // let state = props.store.dialogsPage;

            const onSendMessageClick = () => {
                store.dispatch(SendMessageCreator())
            }

            const onNewMessageChange = (body:string) => {
                store.dispatch(UpdateNewMessageBodyCreator(body))
            }
        return  <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;











