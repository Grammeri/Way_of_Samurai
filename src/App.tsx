import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {ActionsTypes} from "./redux/profile-reducer";
import {AppRootStateType} from "./redux/redux-store";


export type AppPropsType = {
    state: AppRootStateType
    // addPost: (message: string) => void
    // updateNewPostText: (newText: string) => void
    // store: StoreType
    dispatch:(action:ActionsTypes)=>void
    /*store:StoreType*/
}

function App(props: AppPropsType) {
// const state = props.store.getState()

    return (
        <BrowserRouter>
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
                               <Dialogs
                                   dialogsPage={props.state.dialogsReducer}//подчеркивало dialogsPage: удаляем, TS подсказывает
                                   dispatch={props.dispatch}
                               />
                           }/>


                    <Route path="/profile"
                           render={() =>
                               <Profile
                                   profilePage={props.state.profileReducer}//подчеркивало profilePage: удаляем, TS подсказывает
                                   dispatch={props.dispatch}
                                                               />
                           }/>

                    {/*                    <Route path="/news" component={News}/>
                    <Route path="/news" component={News}/>

                    <Route path="/music" component={Music}/>
                    <Route path="/music" component={Music}/>

                    <Route path="/settings" component={Settings}/>
                    <Route path="/settings" component={Settings}/>*/}
                </div>
            </div>

        </BrowserRouter>)

}


export default App;
