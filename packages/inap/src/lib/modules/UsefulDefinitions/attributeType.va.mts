/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary attributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeType ID ::= {ds  4}
 * ```
 * 
 * @constant
 */
export
const attributeType: ID = _OID.fromParts([
    4,
], ds);

/* eslint-enable */
