/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_equivalentLabels
 * @description
 *
 * Signed-attribute OID for `EquivalentLabels`
 * (`… smime(16) id-aa(2) 9`) ([RFC 2634 §3.4.1](https://datatracker.ietf.org/doc/html/rfc2634#section-3.4.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-equivalentLabels OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-aa(2) 9}
 * ```
 *
 * @constant
 */
export const id_aa_equivalentLabels: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    9,
]);

/* eslint-enable */
