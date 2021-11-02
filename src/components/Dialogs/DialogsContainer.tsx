import React, {ChangeEvent} from "react";
import {ActionsTypes, SendMessageCreator} from "../../redux/profile-reducer";
import {UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType, PostType} from "../../redux/store";



/*type DialogsPropsType = {
/!*    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    store: StoreType*!/
/!*    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void*!/
   }*/

type MapSatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void,
    sendMessage: (newText: string) => void,
}
      /*  sendMessage:()=>void
}*/

//Двумя функциями ниже настраиваем наш connect


    let mapStateToProps = (state:RootStateType): MapSatePropsType=> {
    return{
dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return{
        updateNewPostText: (newText:string)=>{
            dispatch(SendMessageCreator())
        },
        sendMessage:(message:string)=>{
            dispatch(UpdateNewMessageBodyCreator(message))
        },

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
//Говорим: законнекти к стору презентационную компоненту по этим правилам
//Connect возвращает новую контейнерную компоненту

export default DialogsContainer;











