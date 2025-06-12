/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { ds } from "../UsefulDefinitions/ds.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

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
