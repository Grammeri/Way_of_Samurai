import React from "react";
import classes from "./../Dialogs.module.css";



function Message(props: {message:string}) {



    return <div className={classes.message}>{props.message}</div>
}

export default Message;
