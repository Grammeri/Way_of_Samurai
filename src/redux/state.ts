import {rerenderEntireTree} from "../render";

export type DialogsPageType = {
    dialogs: { id: number, name: string}[],
    messages: {id: number, message: string}[]
}

export type PostType = {id: number, message: string, likesCount: number}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string

}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AddPostProps = {
    addPost:(message: string)=>void
}

let state: AppStateType = {
    profilePage:{
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount:12},
            {id: 2, message: "It's my first post", likesCount:11},
            {id: 3, message: "My god", likesCount:19},
        ],
        newPostText: "it-kamasutra"
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you!"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ]
    }
}
//@ts-ignore
window.state = state;
//Anything can be instead of message
export const addPost = () => {
    //Create an object in a separate variable
    const newPost: PostType = {
        id:5,
        //we take message from the parameters
        message: state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
//testing for commit
rerenderEntireTree(state);

export default state;