import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer
}) //this object should be understood as STATE

let store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export type StoreType = typeof store

export type RootStateType = ReturnType<typeof rootReducer>

export default store;

