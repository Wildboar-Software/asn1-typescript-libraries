/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION keyPurposes */
/**
 * @summary keyPurposes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyPurposes                              ID ::= {ds 38}
 * ```
 *
 * @constant
 */
export const keyPurposes: ID = new _OID([38], ds);
/* END_OF_SYMBOL_DEFINITION keyPurposes */

/* eslint-enable */
