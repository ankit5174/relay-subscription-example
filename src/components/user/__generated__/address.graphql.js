/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type address$ref: FragmentReference;
export type address = {|
  +name: string,
  +addresses: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +pincode: number
      |}
    |}>
  |},
  +$refType: address$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "address",
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
(node/*: any*/).hash = 'a35c08f836359f4b9110be5f401e2361';
module.exports = node;
