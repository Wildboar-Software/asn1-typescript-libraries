/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION port */
/**
 * @summary port
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * port                                     ID ::= {ds 11}
 * ```
 *
 * @constant
 */
export const port: ID = new _OID([11], ds);
/* END_OF_SYMBOL_DEFINITION port */

/* eslint-enable */
