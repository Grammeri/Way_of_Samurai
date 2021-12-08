import {ActionsTypes} from "./profile-reducer";

export type UserType = {
    id:number
    followed:boolean
    name:string
    status:string
    location: {city:string, country:string}
    photoUrl: string
    photos: {
        small: string
        large: string
    }
}
export type UsersType = {
    users:UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}


const usersReducer = (state: UsersType = initialState, action: ActionsTypes): UsersType =>{

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":{
            return {...state,users: action.users}
            }
        case "SET-CURRENT-PAGE":{
            return {...state,currentPage : action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return {...state,totalUsersCount : action.count}
        }
        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users}) as const
export const setCurrentPageAC = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: "SET-TOTAL-USERS-COUNT", count:totalUsersCount}) as const




export default usersReducer;