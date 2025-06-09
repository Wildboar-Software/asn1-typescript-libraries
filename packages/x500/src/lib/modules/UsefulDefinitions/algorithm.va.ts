/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION algorithm */
/**
 * @summary algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithm                                ID ::= {ds 8}
 * ```
 *
 * @constant
 */
export const algorithm: ID = new _OID([8], ds);
/* END_OF_SYMBOL_DEFINITION algorithm */

/* eslint-enable */
