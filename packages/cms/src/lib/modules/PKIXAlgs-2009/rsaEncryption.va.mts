/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary rsaEncryption
 * @description
 *
 * RSA encryption / PKCS #1 v1.5 key/signature OID ([RFC 3279 §2.3.1](https://datatracker.ietf.org/doc/html/rfc3279#section-2.3.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryption OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-1(1) 1 }
 * ```
 *
 * @constant
 */
export const rsaEncryption: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-1 */ 1,
    1,
]);

/* eslint-enable */
