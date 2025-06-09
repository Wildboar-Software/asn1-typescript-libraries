/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION administrativeRoles */
/**
 * @summary administrativeRoles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administrativeRoles                      ID ::= {ds 23}
 * ```
 *
 * @constant
 */
export const administrativeRoles: ID = new _OID([23], ds);
/* END_OF_SYMBOL_DEFINITION administrativeRoles */

/* eslint-enable */
