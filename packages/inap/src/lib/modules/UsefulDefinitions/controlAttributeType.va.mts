/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary controlAttributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * controlAttributeType ID ::= {ds  37}
 * ```
 * 
 * @constant
 */
export
const controlAttributeType: ID = _OID.fromParts([
    37,
], ds);

/* eslint-enable */
