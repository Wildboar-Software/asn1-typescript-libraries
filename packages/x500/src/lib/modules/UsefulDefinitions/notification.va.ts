/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION notification */
/**
 * @summary notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification                             ID ::= {ds 35}
 * ```
 *
 * @constant
 */
export const notification: ID = new _OID([35], ds);
/* END_OF_SYMBOL_DEFINITION notification */

/* eslint-enable */
