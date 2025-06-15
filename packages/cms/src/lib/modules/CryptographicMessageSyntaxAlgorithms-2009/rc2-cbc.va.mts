/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary rc2_cbc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rc2-cbc OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840)
 * rsadsi(113549) encryptionAlgorithm(3) 2 }
 * ```
 *
 * @constant
 */
export const rc2_cbc: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* encryptionAlgorithm */ 3,
    2,
]);

/* eslint-enable */
