/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { characteristic_two_field } from "../ANSI-X9-62/characteristic-two-field.va.mjs";
/**
 * @summary id_characteristic_two_basis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-characteristic-two-basis OBJECT IDENTIFIER ::= {
 * characteristic-two-field basisType(3) }
 * ```
 *
 * @constant
 */
export const id_characteristic_two_basis: OBJECT_IDENTIFIER = new _OID(
    [/* basisType */ 3],
    characteristic_two_field
);

/* eslint-enable */
