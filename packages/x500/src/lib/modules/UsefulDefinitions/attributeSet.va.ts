/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION attributeSet */
/**
 * @summary attributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSet                             ID ::= {ds 7}
 * ```
 *
 * @constant
 */
export const attributeSet: ID = new _OID([7], ds);
/* END_OF_SYMBOL_DEFINITION attributeSet */

/* eslint-enable */
