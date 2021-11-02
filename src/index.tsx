import reportWebVitals from './reportWebVitals';
import store, {RootStateType} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

export type PostType = {
    id:number,
    message: string,
    likesCount: number;
};

export type DialogType = {
    id: number,
    name: string
};

export type MessageType = {
    id: number,
    message: string,
}

/*rerenderEntireTree(store.getState());*/
rerenderEntireTree(store.getState()); //Вызываем функцию const rerenderEntireTree = () => {
//к ней приходит state


store.subscribe(()=>{
   let state=store.getState();
    rerenderEntireTree(state);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


