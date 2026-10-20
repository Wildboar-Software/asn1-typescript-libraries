/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary serviceElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceElement ID ::= {ds  2}
 * ```
 * 
 * @constant
 */
export
const serviceElement: ID = _OID.fromParts([
    2,
], ds);

/* eslint-enable */
