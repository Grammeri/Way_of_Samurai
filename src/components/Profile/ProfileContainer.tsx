import React from 'react';
import Profile from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {RootStateType} from "../../redux/redux-store";
import { connect } from 'react-redux';
import {RouteComponentProps, withRouter} from "react-router-dom";

type PropsType = RouteComponentProps<{ userId: string }> & ProfilePagePropsType;
export type ProfilePagePropsType = {
    setUserProfile:(profile:null)=>void
    profile: ProfileType | null
}
export type MSTPType = {
    profile: ProfileType | null

}

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = '2';
      }
              axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);