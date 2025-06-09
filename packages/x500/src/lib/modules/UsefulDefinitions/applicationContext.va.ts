/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION applicationContext */
/**
 * @summary applicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationContext                       ID ::= {ds 3}
 * ```
 *
 * @constant
 */
export const applicationContext: ID = new _OID([3], ds);
/* END_OF_SYMBOL_DEFINITION applicationContext */

/* eslint-enable */
