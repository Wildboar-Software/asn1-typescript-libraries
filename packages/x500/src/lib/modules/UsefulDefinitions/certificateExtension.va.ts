/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION certificateExtension */
/**
 * @summary certificateExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExtension                     ID ::= {ds 29}
 * ```
 *
 * @constant
 */
export const certificateExtension: ID = new _OID([29], ds);
/* END_OF_SYMBOL_DEFINITION certificateExtension */

/* eslint-enable */
