/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_alg_SSDH
 * @description
 *
 * OID for Static-Static Diffie-Hellman key agreement in CMS (`id-alg-SSDH`)
 * ([RFC 3370 §4.1.2](https://datatracker.ietf.org/doc/html/rfc3370#section-4.1.2)).
 * UKM MUST be present; parameters are `KeyWrapAlgorithm`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-alg-SSDH OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840)
 * rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) alg(3) 10 }
 * ```
 *
 * @constant
 */
export const id_alg_SSDH: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    10,
]);

/* eslint-enable */
