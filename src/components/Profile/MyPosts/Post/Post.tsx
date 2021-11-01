import React from 'react';
import classes from "./Post.module.css";


function Post(props: any) {

    return (
        <div className={classes.item}>
            <img src={"data:image/jpeg;base64,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"}/>
            {props.message}
            <div>
                <span>like </span> {props.likesCount}
            </div>
        </div>
    )
}


function Count(props: any) {
    return (
        <div>
            <span>{props.assessment}</span>
        </div>
    )
}

export default Post;