/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_characteristic_two_basis } from "../ANSI-X9-62/id-characteristic-two-basis.va.mjs";
/**
 * @summary tpBasis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tpBasis  OBJECT IDENTIFIER ::= { id-characteristic-two-basis trinomial(2) }
 * ```
 *
 * @constant
 */
export const tpBasis: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* trinomial */ 2],
    id_characteristic_two_basis
);

/* eslint-enable */
