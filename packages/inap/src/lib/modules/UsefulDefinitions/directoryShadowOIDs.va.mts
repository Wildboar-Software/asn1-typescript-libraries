/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary directoryShadowOIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryShadowOIDs ID ::= {module directoryShadowOIDs(14) 3}
 * ```
 * 
 * @constant
 */
export
const directoryShadowOIDs: ID = _OID.fromParts([
    /* directoryShadowOIDs */ 14,
    3,
], module_);

/* eslint-enable */
