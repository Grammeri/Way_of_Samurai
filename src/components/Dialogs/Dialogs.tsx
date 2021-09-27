import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
function Dialogs(props: DialogsPropsType) {

/*    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you!"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]*/

let dialogElements = props.dialogsPage.dialogs.map(d  => <DialogItem name={d.name} id={d.id}/>);
let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogElements}


                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}

            </div>

            <div className={classes.messages}>
                {messageElements}
                {/*<Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;









