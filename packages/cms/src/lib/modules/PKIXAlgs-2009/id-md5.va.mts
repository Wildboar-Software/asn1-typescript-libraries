/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_md5
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-md5  OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) rsadsi(113549)
 * digestAlgorithm(2) 5 }
 * ```
 *
 * @constant
 */
export const id_md5: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* digestAlgorithm */ 2,
    5,
]);

/* eslint-enable */
