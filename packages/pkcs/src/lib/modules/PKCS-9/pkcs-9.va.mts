/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary pkcs_9
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9 OBJECT IDENTIFIER ::= {iso(1) member-body(2) us(840)
 *                                 rsadsi(113549) pkcs(1) 9}
 * ```
 *
 * @constant
 */
export const pkcs_9: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    9,
]);

/* eslint-enable */
