/**
 * @flow
 * @relayHash 050ce5db1a509c52a101fbb646831153
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type userList_viewer$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +viewer: {|
    +id: string,
    +$fragmentRefs: userList_viewer$ref,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  viewer {
    ...userList_viewer
    id
  }
}

fragment userList_viewer on Viewer {
  allUsers {
    edges {
      node {
        ...user_user
        id
      }
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  viewer {\n    ...userList_viewer\n    id\n  }\n}\n\nfragment userList_viewer on Viewer {\n  allUsers {\n    edges {\n      node {\n        ...user_user\n        id\n      }\n    }\n  }\n}\n\nfragment user_user on User {\n  name\n  addresses {\n    edges {\n      node {\n        pincode\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "userList_viewer",
            "args": null
          },
          v0
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allUsers",
            "storageKey": null,
            "args": null,
            "concreteType": "UserConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "UserEdge",
                "plural": true,
                "selections": [
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
                                  v0
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v0
                    ]
                  }
                ]
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '18f1155752b735fa930fdf7765f9d1de';
module.exports = node;
