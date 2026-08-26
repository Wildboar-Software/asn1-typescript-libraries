/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary sha1WithRSAEncryption
 * @description
 *
 * SHA-1 with RSA encryption signature OID ([RFC 3279 §2.2.1](https://datatracker.ietf.org/doc/html/rfc3279#section-2.2.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryption OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-1(1) 5 }
 * ```
 *
 * @constant
 */
export const sha1WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-1 */ 1,
    5,
]);

/* eslint-enable */
