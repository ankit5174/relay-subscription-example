/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type user_user$ref: FragmentReference;
export type user_user = {|
  +name: string,
  +addresses: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +pincode: number
      |}
    |}>
  |},
  +$refType: user_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "user_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
(node/*: any*/).hash = 'f185809df510663d82a8814536b77fc0';
module.exports = node;
