/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary sect409r1
 * @description
 *
 * Named curve OID `sect409r1` (B-409) for ECC public keys ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect409r1 OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) certicom(132) curve(0) 37 }
 * ```
 *
 * @constant
 */
export const sect409r1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    37,
]);

/* eslint-enable */
