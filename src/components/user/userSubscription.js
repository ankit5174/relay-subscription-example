import {
    requestSubscription
} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../enviornment';
import {ConnectionHandler} from 'relay-runtime';

const updateQPListSubscription = graphql`
    subscription userSubscription {
        User(filter: {mutation_in: [CREATED]}) {
            mutation
            node {
                ...user_user
            }
        }
    }
`;

export default () => {
    const subscriptionConfig = {
        subscription: updateQPListSubscription,
        variables: {},
        updater: (proxyStore, data) => {
            console.log(data);
            const newAssessment = proxyStore.getRootField('User').getLinkedRecord('node');
            const connection = proxyStore.getRoot().getLinkedRecord('viewer').getLinkedRecord('allUsers');
            const edge = ConnectionHandler.createEdge(
                proxyStore,
                connection,
                newAssessment,
                'UserEdge'
            );
            console.log(edge);

            if (connection) {
                ConnectionHandler.insertEdgeBefore(connection, edge);
                console.log('DONE');
            }

        },
        onError: error => console.log(`An error occured:`, error)
    };

    requestSubscription(
        environment,
        subscriptionConfig
    )

}