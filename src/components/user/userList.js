import React, {Component} from 'react';
import User from "./user";
import {createFragmentContainer} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import userSubscription from './userSubscription';

class UserList extends Component {

    componentDidMount() {
        userSubscription();
    }

    render() {
        let {viewer} = this.props;
        return (
            <div>
                {viewer.allUsers.edges.map(({node}) =>
                        <User user={node} key={node.__id}/>
                    )}

            </div>
        );
    }
}

export default createFragmentContainer(UserList ,
    {
        viewer: graphql`
            fragment userList_viewer on Viewer {
                allUsers {
                    edges {
                        node {
                            ...user_user
                        }
                    }                    
                }
            }
        `,
    }
);


