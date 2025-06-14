/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_characteristic_two_basis } from "../ANSI-X9-62/id-characteristic-two-basis.va.mjs";
/**
 * @summary gnBasis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gnBasis OBJECT IDENTIFIER ::= { id-characteristic-two-basis gaussian(1) }
 * ```
 *
 * @constant
 */
export const gnBasis: OBJECT_IDENTIFIER = new _OID(
    [/* gaussian */ 1],
    id_characteristic_two_basis
);

/* eslint-enable */
