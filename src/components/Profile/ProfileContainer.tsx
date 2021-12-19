import React from 'react';
import Profile from "./Profile";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import { connect } from 'react-redux';
import {RouteComponentProps, withRouter} from "react-router-dom";


type PropsType = RouteComponentProps<{ userId: string }> & ProfilePagePropsType;
export type ProfilePagePropsType = {
    getUserProfile:(userId: number)=>void
    profile: ProfileType | null
}
export type MSTPType = {
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
      let userId = +this.props.match.params.userId;
      if (!userId) {
          userId = 2;
      }
this.props.getUserProfile(userId)
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);