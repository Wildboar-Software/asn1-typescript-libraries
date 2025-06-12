/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { ds } from "../UsefulDefinitions/ds.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

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
