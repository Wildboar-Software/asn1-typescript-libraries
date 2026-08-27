/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary sect571k1
 * @description
 *
 * Named curve OID `sect571k1` (K-571) for ECC public keys ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect571k1 OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) certicom(132) curve(0) 38 }
 * ```
 *
 * @constant
 */
export const sect571k1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    38,
]);

/* eslint-enable */
