import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ActionsTypes, AppStateType} from "./redux/profile-reducer";
import {StoreType} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


export type AppPropsType = {
    state: AppStateType

    store: StoreType
   dispatch:(action:ActionsTypes)=>void
 }

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>

                <Route path="/dialogs"
                       render={() =>
                           <DialogsContainer/>}/>

                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer />}/>

                <Route path = "/users"
                       render={()=><UsersContainer/>}/>

            </div>
        </div>)
}


export default App;
