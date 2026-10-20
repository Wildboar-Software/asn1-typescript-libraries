/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * problem ID ::= {ds  34}
 * ```
 * 
 * @constant
 */
export
const problem: ID = _OID.fromParts([
    34,
], ds);

/* eslint-enable */
