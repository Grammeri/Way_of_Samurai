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
import {AppStateType, StoreType} from "./redux/state";


type AppPropsType = {
    state: AppStateType
    addPost: (message: string) => void
    updateNewPostText: (newText: string) => void
    store: StoreType
}

function App(props: AppPropsType) {
const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs"
                           render={() =>
                               <Dialogs
                                   dialogsPage={props.state.dialogsPage}
                               />
                           }/>


                    <Route path="/profile"
                           render={() =>
                               <Profile
                                   profilePage={props.state.profilePage}
                                   addPost={props.store.addPost.bind(props.store)}
                                   newPostText={props.state.profilePage.newPostText}
                                   updateNewPostText={props.store.updateNewPostText.bind(props.store)}
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
