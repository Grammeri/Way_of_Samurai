import React from 'react';
import Profile from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {RootStateType} from "../../redux/redux-store";
import { connect } from 'react-redux';

export type ProfilePagePropsType = {
    setUserProfile:(profile:null)=>void
    profile: ProfileType | null
}
export type MSTPType = {
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfilePagePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state:RootStateType): MSTPType => ({
   profile: state.profilePage.profile
})
export default connect (mapStateToProps, { setUserProfile })(ProfileContainer);