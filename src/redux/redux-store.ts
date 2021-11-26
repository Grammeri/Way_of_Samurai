import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
}) //этот объект надо воспринимать как стейт

let store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export type StoreType = typeof store

export type RootStateType = ReturnType<typeof rootReducer>

export default store;

