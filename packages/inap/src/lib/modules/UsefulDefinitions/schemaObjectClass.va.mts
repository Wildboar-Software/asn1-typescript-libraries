/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary schemaObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schemaObjectClass ID ::= {ds  20}
 * ```
 * 
 * @constant
 */
export
const schemaObjectClass: ID = _OID.fromParts([
    20,
], ds);

/* eslint-enable */
