/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary ecdsa_with_SHA1
 * @description
 *
 * ECDSA with SHA-1 signature OID ([RFC 3279 §2.2.3](https://datatracker.ietf.org/doc/html/rfc3279#section-2.2.3); [RFC 5480](https://datatracker.ietf.org/doc/html/rfc5480)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA1 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045)
 * signatures(4) 1 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* signatures */ 4,
    1,
]);

/* eslint-enable */
