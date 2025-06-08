/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_fieldType } from "../ANSI-X9-62/id-fieldType.va";
export { id_fieldType } from "../ANSI-X9-62/id-fieldType.va";

/* START_OF_SYMBOL_DEFINITION characteristic_two_field */
/**
 * @summary characteristic_two_field
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * characteristic-two-field OBJECT IDENTIFIER ::= {
 * id-fieldType characteristic-two(2) }
 * ```
 *
 * @constant
 */
export const characteristic_two_field: OBJECT_IDENTIFIER = new _OID(
    [/* characteristic-two */ 2],
    id_fieldType
);
/* END_OF_SYMBOL_DEFINITION characteristic_two_field */

/* eslint-enable */
