import React from 'react';
import Profile from "./Profile";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import { connect } from 'react-redux';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsTyps = {
    userId:string
}

type PropsType = RouteComponentProps<{ userId: string }> & ProfilePagePropsType;

export type ProfilePagePropsType = {
    getUserProfile:(userId: number)=>void
    profile: ProfileType | null


}
export type MSTPType = {
    profile: ProfileType | null
    isAuth:boolean
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state:RootStateType)=> ({
   profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withAuthRedirect(connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));


