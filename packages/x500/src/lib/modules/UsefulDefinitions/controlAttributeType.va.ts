/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION controlAttributeType */
/**
 * @summary controlAttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * controlAttributeType                     ID ::= {ds 37}
 * ```
 *
 * @constant
 */
export const controlAttributeType: ID = new _OID([37], ds);
/* END_OF_SYMBOL_DEFINITION controlAttributeType */

/* eslint-enable */
