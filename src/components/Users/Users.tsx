import axios from "axios"; // у Димыча * as axios from "axios";
import React from "react";
import {UsersType, UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user.jpg"
import {spawn} from "child_process";
import {UsersContainerType} from "./UsersContainer";
//
// type UsersPropsType = {
//     users: UserType[],
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: UserType[]) => void
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     setCurrentPage: (page: number) => void
//     setTotalUsersCount: (users: UserType[]) => void
// }

class Users extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&
        count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&
        count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users
