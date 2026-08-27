/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary secp224r1
 * @description
 *
 * Named curve OID `secp224r1` (P-224) for ECC public keys ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp224r1 OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) certicom(132) curve(0) 33 }
 * ```
 *
 * @constant
 */
export const secp224r1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    33,
]);

/* eslint-enable */
