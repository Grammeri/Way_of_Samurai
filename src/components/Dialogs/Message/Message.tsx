import React from "react";
import classes from "./../Dialogs.module.css";
import {DialogsPageType} from "../../../redux/state";


function Message(props: {message:string}) {



    return <div className={classes.message}>{props.message}</div>
}

export default Message;