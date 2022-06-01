import classes from "./Users.module.css";
import {Component, useState} from "react";
import User from "./User";

const DUMMY_USERS = [
    {id: 'u1', name: 'Max'},
    {id: 'u2', name: 'Manuel'},
    {id: 'u3', name: 'Julie'},
]

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUsers: true,
        }
    }

    toggleUsersHandler() {
        this.setState((curState) => {
            return {
                showUsers: !curState.showUsers,
            }
        })
    }

    render() {
        const userList = (
            <ul>
                {DUMMY_USERS.map((user) => (
                    <User key={user.id} name={user.name}/>
                ))}
            </ul>
        )

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && userList}
            </div>
        )
    }
}

// const Users = () => {
//     const [showUsers, setShowUsers] = useState(true);
//
//     const toggleUsersHandler = () => {
//         setShowUsers((curState) => !curState)
//     }
//
//     const userList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name}/>
//             ))}
//         </ul>
//     )
//
//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//             {showUsers && userList}
//         </div>
//     )
// }

export default Users