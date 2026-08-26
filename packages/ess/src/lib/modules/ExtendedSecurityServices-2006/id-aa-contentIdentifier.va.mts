/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_contentIdentifier
 * @description
 *
 * Signed-attribute OID for `ContentIdentifier`
 * (`… smime(16) id-aa(2) 7`) ([RFC 2634 §2.7](https://datatracker.ietf.org/doc/html/rfc2634#section-2.7); [RFC 2634 §2.11](https://datatracker.ietf.org/doc/html/rfc2634#section-2.11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-contentIdentifier OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-aa(2) 7}
 * ```
 *
 * @constant
 */
export const id_aa_contentIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    7,
]);

/* eslint-enable */
