/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_characteristic_two_basis } from "../ANSI-X9-62/id-characteristic-two-basis.va.mjs";
/**
 * @summary ppBasis
 * @description
 *
 * Pentanomial polynomial basis for F2^m. Parameters are
 * `Pentanomial`. Used when no irreducible trinomial of degree m
 * exists. ANSI X9.62-1998 §6.1, §4.1.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ppBasis OBJECT IDENTIFIER ::= { id-characteristic-two-basis pentanomial(3) }
 * ```
 *
 * @constant
 */
export const ppBasis: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* pentanomial */ 3],
    id_characteristic_two_basis
);

/* eslint-enable */
