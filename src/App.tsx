import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import {ActionsTypes, AppStateType} from "./redux/profile-reducer";
import {StoreType} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";

export type AppPropsType = {
    state: AppStateType

    store: StoreType
   dispatch:(action:ActionsTypes)=>void
 }

function App() { //не передаст
// const state = props.store.getState()
    return (
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
                               /*store={props.store}*/
                           />}/>

                    <Route path="/profile"
                           render={() => <Profile />}/>

                <Route path = "/users"
                       render={()=><UsersContainer/>}/>

            </div>
        </div>)
}


export default App;
