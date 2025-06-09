/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION group */
/**
 * @summary group
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * group                                    ID ::= {ds 16}
 * ```
 *
 * @constant
 */
export const group: ID = new _OID([16], ds);
/* END_OF_SYMBOL_DEFINITION group */

/* eslint-enable */
