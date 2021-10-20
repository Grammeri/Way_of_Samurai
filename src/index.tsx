import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store /*{store}*/ from "./redux/redux-store";
import {AppStateType} from "./redux/store";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 /*store={store}*/

                /*store={store}*/
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

/*rerenderEntireTree(store.getState());*/
rerenderEntireTree(); //Вызываем функцию const rerenderEntireTree = () => {
//к ней приходит state

store.subscribe(()=>{
    let state = store.getState();
        rerenderEntireTree();});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


