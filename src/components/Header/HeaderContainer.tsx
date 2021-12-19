import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth:boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: ()=>void
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state:RootStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);