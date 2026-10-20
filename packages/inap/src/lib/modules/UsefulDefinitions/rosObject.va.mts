/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary rosObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rosObject ID ::= {ds  25}
 * ```
 * 
 * @constant
 */
export
const rosObject: ID = _OID.fromParts([
    25,
], ds);

/* eslint-enable */
