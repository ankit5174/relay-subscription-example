import { SubscriptionClient } from 'subscriptions-transport-ws';

const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime');


function fetchQuery(operation, variables) {
    return fetch('https://api.graph.cool/relay/v1/cjmlmyxvz2rsw01801l1hdkg1', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables: variables
        })
    }).then((res) => res.json()).catch((err) => {
        console.log(err);
    });
}

const setupSubscription = (request, variables, cacheConfig, observer) => {
    const query = request.text
    const subscriptionClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cjmlmyxvz2rsw01801l1hdkg1', {reconnect: true});
    subscriptionClient.maxConnectTimeGenerator.duration = () => subscriptionClient.maxConnectTimeGenerator.max;
    const onNext = result => {
        observer.onNext(result);
    };
    const onError = error => {
        console.log(error);
        //observer.onError(error);
    };
    const onComplete = () => {
        console.log('completed');
        observer.onCompleted();
    };
    console.log(query)
    subscriptionClient.request({ query, variables }).subscribe(onNext, onError, onComplete);

    return {
        dispose: subscriptionClient.unsubscribe
    };
}

const network = Network.create(fetchQuery, setupSubscription);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
    network,
    store,
})