/* eslint-disable */
import {
    AuthorizationList,
} from "../X790ASN1Module/AuthorizationList.ta.mjs";
import {
    AuthorizationList_Item,
} from "../X790ASN1Module/AuthorizationList-Item.ta.mjs";
import {
    RequestState_provided,
} from "../X790ASN1Module/RequestState.ta.mjs";






/**
 * @summary authorizationAuthorizationDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorizationAuthorizationDefault AuthorizationList ::= {{state provided, type '000000000'B}}
 * ```
 * 
 * @constant
 */
export
const authorizationAuthorizationDefault: AuthorizationList = [
    new AuthorizationList_Item(RequestState_provided, new Uint8ClampedArray(9)),
];

/* eslint-enable */
