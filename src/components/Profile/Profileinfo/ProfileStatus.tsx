import React from 'react';
import classes from "./Profileinfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";


type ProfileStatusType = {
status:any
}

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur ={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;