/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_characteristic_two_basis } from "../ANSI-X9-62/id-characteristic-two-basis.va.mjs";
/**
 * @summary gnBasis
 * @description
 *
 * Gaussian normal basis for F2^m. Parameters are NULL (no extra
 * values). GNB exists when m is not divisible by 8. Prefer type-2
 * ONB, else type-1 ONB, else smallest type (Annex C Table C-1).
 * ANSI X9.62-1998 §6.1, §4.1.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gnBasis OBJECT IDENTIFIER ::= { id-characteristic-two-basis gaussian(1) }
 * ```
 *
 * @constant
 */
export const gnBasis: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* gaussian */ 1],
    id_characteristic_two_basis
);

/* eslint-enable */
