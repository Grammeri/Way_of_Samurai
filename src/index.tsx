import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state:any) => {
debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}//так у Димыча 42 26:22
                 dispatch={store.dispatch.bind(store)}
                 store={store}//Так у Димыча 42 26:22 + 44
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

/*rerenderEntireTree(store.getState());*/
rerenderEntireTree(store.getState()); //Вызываем функцию const rerenderEntireTree = () => {
//к ней приходит state


store.subscribe(()=>{
   let state=store.getState();
    rerenderEntireTree(state);
})//42 27:05 + 44


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


