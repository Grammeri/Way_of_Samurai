import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import {
  /*  AddPostActionType,*/
    AppStateType,
    // StoreType,
/*    UpdateNewPostTextActonType*/
} from "./redux/store";
import {ActionsTypes} from "./redux/profile-reducer";
import {RootStateType, StoreType} from "./redux/redux-store";

export type AppPropsType = {
    state: AppStateType
    // addPost: (message: string) => void
    // updateNewPostText: (newText: string) => void
    store: StoreType
   dispatch:(action:ActionsTypes)=>void

}

function App() { //не передаст
// const state = props.store.getState()
    return (
        /*<BrowserRouter>*/
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                   {/* Route - компонента, следящая за URL. path - это props,  render={() =>
                               <Dialogs
                                   dialogsPage={props.state.dialogsPage} - это callBack.
  в зависимости от path происходит отрисовка*/}
                    <Route path="/dialogs"
                           render={() =>
                               <DialogsContainer
                                  /* dialogsPage={props.state.dialogsPage}
                                   dispatch={props.dispatch}*/
                               /*store={props.store}*/ /> }/>


                    <Route path="/profile"
                           render={() =>
                               <Profile
                                   /*profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}*/
                                      /*store={props.store}*/
                                                               />
                           }/>

                    {/*                    <Route path="/news" component={News}/>
                    <Route path="/news" component={News}/>

                    <Route path="/music" component={Music}/>
                    <Route path="/music" component={Music}/>

                    <Route path="/settings" component={Settings}/>
                    <Route path="/settings" component={Settings}/>*/}
                </div>
            </div>)

       /* </BrowserRouter>)*/

}


export default App;
