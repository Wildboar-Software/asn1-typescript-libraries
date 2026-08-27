/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary sect409k1
 * @description
 *
 * Named curve OID `sect409k1` (K-409) for ECC public keys ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect409k1 OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) certicom(132) curve(0) 36 }
 * ```
 *
 * @constant
 */
export const sect409k1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    36,
]);

/* eslint-enable */
