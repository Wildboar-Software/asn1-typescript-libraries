/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_signingCertificateV2
 * @description
 *
 * Signed-attribute OID for `SigningCertificateV2` (hash agility)
 * (`… smime(16) id-aa(2) 47`) ([RFC 5035 §3](https://datatracker.ietf.org/doc/html/rfc5035#section-3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-signingCertificateV2 OBJECT IDENTIFIER ::= { iso(1)
 *     member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9)
 *     smime(16) id-aa(2) 47 }
 * ```
 *
 * @constant
 */
export const id_aa_signingCertificateV2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    47,
]);

/* eslint-enable */
