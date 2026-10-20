/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary applicationContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applicationContext ID ::= {ds  3}
 * ```
 * 
 * @constant
 */
export
const applicationContext: ID = _OID.fromParts([
    3,
], ds);

/* eslint-enable */
