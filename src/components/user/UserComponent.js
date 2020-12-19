import React, {Component} from 'react';
import './User.css'

class UserComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'user-div'}>
                <div className={'name-user'}><b>{item.id}.</b> {item.name}</div>
                <div className={'phone-user'}>{item.phone}</div>
                <div className={'username-user'}>{item.username}</div>

            </div>
        );
    }
}

export default UserComponent;