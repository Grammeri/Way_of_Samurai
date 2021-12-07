import React from "react";
import { connect } from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {MapDispatchPropsType, MapSatePropsType} from "../Dialogs/DialogsContainer";
import {followAC, setUsersAC, unfollowAC, UsersType, UserType} from "../../redux/users-reducer";
import Users from "./Users";



let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users) //connect возвращает компоненту обертку UsersContainer