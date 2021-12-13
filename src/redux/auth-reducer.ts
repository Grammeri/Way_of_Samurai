import {ActionsTypes} from "./profile-reducer";

export type AuthType = {
    id:string | null
    email: string | null
    login: string | null
    isAuth:boolean
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: string, email:string, login:string) =>
    ({type: "SET-USER-DATA", data:{userId, email, login}}) as const

export default authReducer;
