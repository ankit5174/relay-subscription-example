import React, {Component} from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

class Address extends Component {
    render() {
        return (
            <div>{this.props.user.addresses && this.props.user.addresses.edges && this.props.user.addresses.edges.map(({node}) => {
                return node.pincode
            })}</div>
        )
    }
}

export default createFragmentContainer(Address, graphql`
fragment address on User {
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

