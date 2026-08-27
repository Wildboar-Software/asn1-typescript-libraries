/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary des_ede3_cbc
 * @description
 *
 * OID for Triple-DES CBC content encryption (`des-ede3-cbc`)
 * ([RFC 3370 §5.1](https://datatracker.ietf.org/doc/html/rfc3370#section-5.1)).
 * Parameters are an 8-octet IV.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * des-ede3-cbc OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) encryptionAlgorithm(3) 7 }
 * ```
 *
 * @constant
 */
export const des_ede3_cbc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* encryptionAlgorithm */ 3,
    7,
]);

/* eslint-enable */
