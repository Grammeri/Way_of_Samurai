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

export type DialogsPageType = {
    dialogs: { id: number, name: string}[],
    messages: {id: number, message: string}[]
}

export type StoreType = {
    _state: AppStateType
    //updateNewPostText: (newText: string) => void
    //addPost: () => void
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    //не протипизировал как AppStateType
    getState: ()=> AppStateType
    dispatch:(action:ActionsTypes)=>void
}

export type AddPostActionType = {
    type: "ADD-POST"
}

export type UpdateNewPostTextActonType = {
    type:"UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActonType

let store: StoreType = {
    _state: {
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
},
    _callSubscriber () {
        console.log("state changed")
    },

    getState(){
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    /*addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },*/
    /*updateNewPostText (newText:string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },*/
    dispatch (action){
        if (action.type==="ADD-POST"){
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type==="UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

/*callSubscriber();*/

export default store;
//@ts-ignore
window.store = store;

// store - OOP