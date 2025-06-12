/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { ds } from "../UsefulDefinitions/ds.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION attributeSyntaxVendor */
/**
 * @summary attributeSyntaxVendor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSyntaxVendor                    ID ::= {ds 5}
 * ```
 *
 * @constant
 */
export const attributeSyntaxVendor: ID = new _OID([5], ds);
/* END_OF_SYMBOL_DEFINITION attributeSyntaxVendor */

/* eslint-enable */
