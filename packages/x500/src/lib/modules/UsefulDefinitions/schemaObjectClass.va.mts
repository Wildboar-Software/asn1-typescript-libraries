/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { ds } from "../UsefulDefinitions/ds.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION schemaObjectClass */
/**
 * @summary schemaObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaObjectClass                        ID ::= {ds 20}
 * ```
 *
 * @constant
 */
export const schemaObjectClass: ID = new _OID([20], ds);
/* END_OF_SYMBOL_DEFINITION schemaObjectClass */

/* eslint-enable */
