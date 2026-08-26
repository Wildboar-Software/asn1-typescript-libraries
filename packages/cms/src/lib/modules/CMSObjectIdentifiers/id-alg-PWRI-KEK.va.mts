/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_alg_PWRI_KEK
 * @description
 *
 * OID for password-based recipient info key-encryption (`id-alg-PWRI-KEK`)
 * ([RFC 3211 §2.2](https://datatracker.ietf.org/doc/html/rfc3211#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-alg-PWRI-KEK OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) alg(3) 9 }
 * ```
 *
 * @constant
 */
export const id_alg_PWRI_KEK: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    9,
]);

/* eslint-enable */
