import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage:(newText:string)=>void
    updateNewPostText:(body:string)=>void
    isAuth:boolean

}

function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage;

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);// У Димыча state в начале, не props
    let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessageBody; //Этот newMessageBody будет отображаться внутри value (34)
    //Выносим логику кнопки в отдельную функцию

    const onSendMessageClick = () => {
        props.sendMessage(newMessageBody)
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body = e.target.value
        props.updateNewPostText(body);
       /* props.dispatch(UpdateNewMessageBodyCreator(body))*/
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

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











