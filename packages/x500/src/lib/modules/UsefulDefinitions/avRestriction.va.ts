/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION avRestriction */
/**
 * @summary avRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avRestriction                            ID ::= {ds 41}
 * ```
 *
 * @constant
 */
export const avRestriction: ID = new _OID([41], ds);
/* END_OF_SYMBOL_DEFINITION avRestriction */

/* eslint-enable */
