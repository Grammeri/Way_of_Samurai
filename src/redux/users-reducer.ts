import {ActionsTypes, SendMessageCreator} from "./profile-reducer";

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

}

let initialState: UsersType = {
        users: [
            /*{id: 1, photoUrl: "https://www.meme-arsenal.com/memes/3fbc577bba972a33aed3262196e3608b.jpg", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
            {id: 2, photoUrl: "https://www.meme-arsenal.com/memes/3fbc577bba972a33aed3262196e3608b.jpg", followed: false, fullName: "Sasha", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
            {id: 3, photoUrl: "https://www.meme-arsenal.com/memes/3fbc577bba972a33aed3262196e3608b.jpg", followed: false, fullName: "Andrew", status: "I am a boss too", location: {city: "Kiev", country: "Ukrain"}},*/
        ],
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
        case "SET-USERS":{ //our array is empty, we will need this case to set users from a Server
            return {...state,users: [...state.users,...action.users]}
            }
        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users}) as const


export default usersReducer;