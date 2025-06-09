/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { openLDAP_attributes } from "../UsefulDefinitions/openLDAP-attributes.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { openLDAP_attributes } from "../UsefulDefinitions/openLDAP-attributes.va.js";

/* START_OF_SYMBOL_DEFINITION id_oat */
/**
 * @summary id_oat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oat                                   ID ::= openLDAP-attributes
 * ```
 *
 * @constant
 */
export const id_oat: ID = openLDAP_attributes;
/* END_OF_SYMBOL_DEFINITION id_oat */

/* eslint-enable */
