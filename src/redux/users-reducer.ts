import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


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
    isFetching: boolean
    followingInProgress: number[]

}

export type UsersReducerActionsTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>




let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state: UsersType = initialState, action: UsersReducerActionsTypes): UsersType =>{

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
        case "TOGGLE-IS-FETCHING":{
            return {...state, isFetching : action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":{
            return {...state,
                followingInProgress : action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: UserType[]) => ({type: "SET-USERS", users}) as const
export const setCurrentPage = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCount = (totalUsersCount:number) => ({type: "SET-TOTAL-USERS-COUNT", count:totalUsersCount}) as const
export const toggleIsFetching = (isFetching:boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching}) as const
export const toggleFollowingProgress = (isFetching:boolean, userId:number) => ({type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId}) as const

export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch (toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (followSuccess(userId))
                }

                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch (toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (unfollowSuccess(userId))
                }

                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer;