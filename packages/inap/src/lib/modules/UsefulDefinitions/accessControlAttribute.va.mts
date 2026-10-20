/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary accessControlAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accessControlAttribute ID ::= {ds  24}
 * ```
 * 
 * @constant
 */
export
const accessControlAttribute: ID = _OID.fromParts([
    24,
], ds);

/* eslint-enable */
