/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary objectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * objectClass ID ::= {ds  6}
 * ```
 * 
 * @constant
 */
export
const objectClass: ID = _OID.fromParts([
    6,
], ds);

/* eslint-enable */
