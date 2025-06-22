/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_fieldType } from "../ANSI-X9-62/id-fieldType.va.mjs";
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
export const characteristic_two_field: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* characteristic-two */ 2],
    id_fieldType
);

/* eslint-enable */
