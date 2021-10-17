export type PostType = { id: number, message: string, likesCount: number }

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: { id: number, name: string }[],
    messages: { id: number, message: string }[]
    newMessageBody: string
}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: AppStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
    dispatch: (action: ActionsTypes) => void
}

export type AddPostProps = {
    addPost: (message: string) => void
}

export type ActionsTypes =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof UpdateNewMessageBodyCreator> |
    ReturnType<typeof SendMessageCreator>
type SendMessageCreatorType = ReturnType<typeof SendMessageCreator>

export const UpdateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const
export const SendMessageCreator = () => ({type: "SEND-MESSAGE"}) as const
export const UpdateNewMessageBodyCreator = (body: string) => ({type: "UPDATE-NEW-MESSAGE-BODY", body: body} as const)
export const AddPostAC = () => ({type: "ADD-POST"}) as const
//Создаем константы, определенное имя action-на. (Это не для TS)
/*const ADD-POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";*/

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "My god", likesCount: 19},
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
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
            ],
            newMessageBody: ""
        }
    },

    //Functions
    _callSubscriber() {
        console.log("state changed")
    }, //Ask consultants, check w/Dimych

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body //берем this - store (наш объект), у него есть
            //_state у state есть newMessageBody и скажем, что ты будешь равен чему-то, что придет из вне
            //с этим action
            this._callSubscriber();
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id: 6, message: body}) //В качестве демонстрации
            this._callSubscriber();
        }
    }
}

/*export default store;
//@ts-ignore
window.store = store;*/

// THE END


/*export const AddPostAC = () => {
    return{
        type:"ADD-POST"
    }as const
}*/


/*export const UpdateNewPostTextAC = (newText:string)=> {
    return{
        type:"UPDATE-NEW-POST-TEXT",
        newText: newText
    }as const
}*/

//Круглыми скобочками показываем, что это не тело функции, а объект. Создали AC, который не принимает ничего,
// и возвращает объект


/*callSubscriber();*/

/*export default store;
//@ts-ignore
window.store = store;*/

// store - OOP

/*
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

export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostTextAC>

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

    /!*addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },*!/
    /!*updateNewPostText (newText:string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },*!/



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

export const AddPostAC = () => {
    return{
        type:"ADD-POST"
    }as const
}

export const UpdateNewPostTextAC = (newText:string)=> {
    return{
        type:"UPDATE-NEW-POST-TEXT",
        newText: newText
    }as const
}
/!*callSubscriber();*!/

export default store;
//@ts-ignore
window.store = store;

// store - OOP
*/
