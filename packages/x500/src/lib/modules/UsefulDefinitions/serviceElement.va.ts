/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION serviceElement */
/**
 * @summary serviceElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceElement                           ID ::= {ds 2}
 * ```
 *
 * @constant
 */
export const serviceElement: ID = new _OID([2], ds);
/* END_OF_SYMBOL_DEFINITION serviceElement */

/* eslint-enable */
