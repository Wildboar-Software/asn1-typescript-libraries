/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_ecPublicKey
 * @description
 *
 * Unrestricted ECC public-key OID; parameters identify the curve ([RFC 5480 §2.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045) keyType(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* keyType */ 2,
    1,
]);

/* eslint-enable */
