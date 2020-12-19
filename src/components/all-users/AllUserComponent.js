import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import UsersService from "../services/UsersService";
import './AllUsers.css'

class AllUserComponent extends Component {
    state = {users: [], chosenUser: null}

    UsersService = new UsersService()

    componentDidMount() {
        this.UsersService.getUsersFromAPI().then(value => this.setState({users: value}))
    }

    componentDidUpdate() {
        let {id} = this.props;
        if (id === '') {
            return
        }
        this.UsersService.getChosenUserFromAPI(id).then(value => this.setState({chosenUser: value}))
    }

    render() {
        let {users, chosenUser} = this.state;
        // console.log(chosenUser)

        return (
            <div className={'users-div'}>
               <div className={'body-title'}>
                   <div>Name</div> <div>Phone</div> <div>Username</div>
               </div>
                {users.map(value => <UserComponent item={value} key={value.id}/>)}

                {chosenUser && <div className={'chosen-user-div'}><UserComponent item={chosenUser}/></div>}
            </div>
        );
    }
}

export default AllUserComponent;