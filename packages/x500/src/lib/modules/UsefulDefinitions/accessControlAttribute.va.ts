/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION accessControlAttribute */
/**
 * @summary accessControlAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlAttribute                   ID ::= {ds 24}
 * ```
 *
 * @constant
 */
export const accessControlAttribute: ID = new _OID([24], ds);
/* END_OF_SYMBOL_DEFINITION accessControlAttribute */

/* eslint-enable */
