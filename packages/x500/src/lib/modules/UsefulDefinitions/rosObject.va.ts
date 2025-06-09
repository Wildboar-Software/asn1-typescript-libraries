/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION rosObject */
/**
 * @summary rosObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rosObject                                ID ::= {ds 25}
 * ```
 *
 * @constant
 */
export const rosObject: ID = new _OID([25], ds);
/* END_OF_SYMBOL_DEFINITION rosObject */

/* eslint-enable */
