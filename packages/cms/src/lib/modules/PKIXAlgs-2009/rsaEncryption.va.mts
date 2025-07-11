/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary rsaEncryption
 * @description
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
