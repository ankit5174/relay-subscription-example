/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type user_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type userList_viewer$ref: FragmentReference;
export type userList_viewer = {|
  +allUsers: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: user_user$ref
      |}
    |}>
  |},
  +$refType: userList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "userList_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
                  "kind": "FragmentSpread",
                  "name": "user_user",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cf506b1410d48c42eb24d8bf67bb2b07';
module.exports = node;
