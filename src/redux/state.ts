import profileReducer, {ActionsTypes} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state, action).profilePage
        this._state.dialogsPage = dialogsReducer(this._state, action).dialogsPage
        this._callSubscriber();
           }
}

