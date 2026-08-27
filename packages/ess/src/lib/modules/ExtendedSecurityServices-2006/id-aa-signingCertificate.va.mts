/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_signingCertificate
 * @description
 *
 * Signed-attribute OID for `SigningCertificate` (v1 / SHA-1)
 * (`… smime(16) id-aa(2) 12`) ([RFC 2634 §5.4](https://datatracker.ietf.org/doc/html/rfc2634#section-5.4); [RFC 5035 §5](https://datatracker.ietf.org/doc/html/rfc5035#section-5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-signingCertificate OBJECT IDENTIFIER ::= { iso(1)
 *     member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9)
 *     smime(16) id-aa(2) 12 }
 * ```
 *
 * @constant
 */
export const id_aa_signingCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    12,
]);

/* eslint-enable */
