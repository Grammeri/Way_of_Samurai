export type AuthType = {
    id:string | null
    email: string | null
    login: string | null
    isAuth:boolean
}

export type AuthReducerActionsTypes =
    | ReturnType<typeof setAuthUserData>

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state: AuthType = initialState, action: AuthReducerActionsTypes): AuthType => {

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

export const setAuthUserData = (userId: number, email:string, login:string) =>
    ({type: "SET-USER-DATA", data:{userId, email, login}}as const)

export default authReducer;
