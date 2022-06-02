import classes from "./UserFinder.module.css";
import React, {Component, useEffect, useState} from "react";
import Users from "./Users";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
    static contextType = UsersContext; //can only set the context type property one

    constructor(props) {
        super(props);
        this.state = {
            filteredUsers: [],
            searchTerm: "",
        }
    }

    componentDidMount() {
        this.setState({
            filteredUsers: this.context.users,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
                </div>
                <Users users={this.state.filteredUsers}/>
            </React.Fragment>)
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);
//
//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };
//
//     return (
//         <React.Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </React.Fragment>
//     );
// }

export default UserFinder
