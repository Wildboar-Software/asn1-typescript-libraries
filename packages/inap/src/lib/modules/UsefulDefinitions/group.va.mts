/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * group ID ::= {ds  16}
 * ```
 * 
 * @constant
 */
export
const group: ID = _OID.fromParts([
    16,
], ds);

/* eslint-enable */
