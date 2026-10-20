/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary subentry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subentry ID ::= {ds  17}
 * ```
 * 
 * @constant
 */
export
const subentry: ID = _OID.fromParts([
    17,
], ds);

/* eslint-enable */
