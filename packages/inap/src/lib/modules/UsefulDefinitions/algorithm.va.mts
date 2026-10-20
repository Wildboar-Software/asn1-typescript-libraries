/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary algorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * algorithm ID ::= {ds  8}
 * ```
 * 
 * @constant
 */
export
const algorithm: ID = _OID.fromParts([
    8,
], ds);

/* eslint-enable */
