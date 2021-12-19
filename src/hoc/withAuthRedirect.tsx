import React, {Component, ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";


type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props:MapStatePropsType) => {

        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

}




/*
        (props)
    } {
        if (!this.props.isAuth) return <Redirect to = "/login" / >

        return <Component {...this.props}
        />
    }

    return RedirectComponent;
}*/
