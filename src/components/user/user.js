import React, {Component} from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class User extends Component {
    render() {
        return (
            <div>
                <div>{this.props.user.name}</div>
                <div>{this.props.user.addresses && this.props.user.addresses.edges && this.props.user.addresses.edges.map(({node}) => {
                    return node.pincode
                })}</div>
                <br/>
            </div>
        )
    }
}

export default createFragmentContainer(User, graphql`
fragment user_user on User {
    name
    addresses {
        edges {
            node {
                pincode
            }
        }
    }
}
`);

// type Subscription {
//     User(filter: UserSubscriptionFilter): UserSubscriptionPayload
// }
//
// input UserSubscriptionFilter {
//     mutation_in: [_ModelMutationType!]
// }
//
// type UserSubscriptionPayload {
//     mutation: _ModelMutationType!
//         node: User!
// }
//
// enum _ModelMutationType {
//     CREATED
//     UPDATED
//     DELETED
// }