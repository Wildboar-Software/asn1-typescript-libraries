/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { ds } from "../UsefulDefinitions/ds.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION operationalAttributeType */
/**
 * @summary operationalAttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalAttributeType                 ID ::= {ds 18}
 * ```
 *
 * @constant
 */
export const operationalAttributeType: ID = new _OID([18], ds);
/* END_OF_SYMBOL_DEFINITION operationalAttributeType */

/* eslint-enable */
