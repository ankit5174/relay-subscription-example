/**
 * @flow
 * @relayHash 6577fe4f7d0babd579a72c0be77ecf9f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type user_user$ref = any;
export type _ModelMutationType = "CREATED" | "DELETED" | "UPDATED" | "%future added value";
export type userSubscriptionVariables = {||};
export type userSubscriptionResponse = {|
  +User: ?{|
    +mutation: _ModelMutationType,
    +node: {|
      +$fragmentRefs: user_user$ref
    |},
  |}
|};
export type userSubscription = {|
  variables: userSubscriptionVariables,
  response: userSubscriptionResponse,
|};
*/


/*
subscription userSubscription {
  User(filter: {mutation_in: [CREATED]}) {
    mutation
    node {
      ...user_user
      id
    }
  }
}

fragment user_user on User {
  name
  addresses {
    edges {
      node {
        pincode
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "mutation_in": [
        "CREATED"
      ]
    },
    "type": "UserSubscriptionFilter"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mutation",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "userSubscription",
  "id": null,
  "text": "subscription userSubscription {\n  User(filter: {mutation_in: [CREATED]}) {\n    mutation\n    node {\n      ...user_user\n      id\n    }\n  }\n}\n\nfragment user_user on User {\n  name\n  addresses {\n    edges {\n      node {\n        pincode\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "userSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "User",
        "storageKey": "User(filter:{\"mutation_in\":[\"CREATED\"]})",
        "args": v0,
        "concreteType": "UserSubscriptionPayload",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "user_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "userSubscription",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "User",
        "storageKey": "User(filter:{\"mutation_in\":[\"CREATED\"]})",
        "args": v0,
        "concreteType": "UserSubscriptionPayload",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "addresses",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AddressEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Address",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "pincode",
                            "args": null,
                            "storageKey": null
                          },
                          v2
                        ]
                      }
                    ]
                  }
                ]
              },
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '546effd862b610371e48d9404865ec65';
module.exports = node;
