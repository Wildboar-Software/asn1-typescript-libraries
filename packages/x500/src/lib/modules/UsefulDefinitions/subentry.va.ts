/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION subentry */
/**
 * @summary subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentry                                 ID ::= {ds 17}
 * ```
 *
 * @constant
 */
export const subentry: ID = new _OID([17], ds);
/* END_OF_SYMBOL_DEFINITION subentry */

/* eslint-enable */
