import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
}) //этот объект надо воспринимать как стейт

let store = createStore(rootReducers);
export type StoreType = typeof store

export type RootStateType = ReturnType<typeof rootReducers>

export default store;

