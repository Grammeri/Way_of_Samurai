import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType, SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsPropsType) {
    /*Нужное состояние мы передаем через пропс, поэтому стор тут не нужен*/
    /*let sate = props.store.getState().dialogsPage;*/

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody; //Этот newMessageBody будет отображаться внутри value (34)
    //Выносим логику кнопки в отдельную функцию

    const onSendMessageClick = () => {
        props.dispatch(SendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(UpdateNewMessageBodyCreator(body))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>

                    {/* //Значения в textarea должны приходить из props*/}
                    <div><textarea value={newMessageBody}
                                   placeholder={"Enter your message"}
                                   onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;


/*import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
function Dialogs(props: DialogsPropsType) {

    let dialogElements = props.dialogsPage.dialogs.map(d  => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogElements}



            </div>

            <div className={classes.messages}>
                {messageElements}

            </div>
        </div>
    )
}

export default Dialogs;*/









