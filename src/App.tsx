import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import {
    ActionsTypes,
  /*  AddPostActionType,*/
    AppStateType,
    StoreType,
/*    UpdateNewPostTextActonType*/
} from "./redux/state";


export type AppPropsType = {
    state: AppStateType
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
                                   dialogsPage={props.state.dialogsPage}
                                   dispatch={props.dispatch}
                               />
                           }/>


                    <Route path="/profile"
                           render={() =>
                               <Profile
                                   profilePage={props.state.profilePage}
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
