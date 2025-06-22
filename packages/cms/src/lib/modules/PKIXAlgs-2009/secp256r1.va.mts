/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary secp256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp256r1 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045) curves(3)
 * prime(1) 7 }
 * ```
 *
 * @constant
 */
export const secp256r1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* curves */ 3,
    /* prime */ 1,
    7,
]);

/* eslint-enable */
