/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary attributeValueContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeValueContext ID ::= {ds  31}
 * ```
 * 
 * @constant
 */
export
const attributeValueContext: ID = _OID.fromParts([
    31,
], ds);

/* eslint-enable */
