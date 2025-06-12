/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { ds } from "../UsefulDefinitions/ds.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION module_ */
/**
 * @summary module_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * module                                   ID ::= {ds 1}
 * ```
 *
 * @constant
 */
export const module_: ID = new _OID([1], ds);
/* END_OF_SYMBOL_DEFINITION module_ */

/* eslint-enable */
