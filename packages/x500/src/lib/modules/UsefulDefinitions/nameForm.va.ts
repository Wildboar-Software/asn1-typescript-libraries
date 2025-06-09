/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION nameForm */
/**
 * @summary nameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForm                                 ID ::= {ds 15}
 * ```
 *
 * @constant
 */
export const nameForm: ID = new _OID([15], ds);
/* END_OF_SYMBOL_DEFINITION nameForm */

/* eslint-enable */
