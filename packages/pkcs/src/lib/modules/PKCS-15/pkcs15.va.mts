/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary pkcs15
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15 OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-15(15)}
 * ```
 *
 * @constant
 */
export const pkcs15: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-15 */ 15,
]);

/* eslint-enable */
