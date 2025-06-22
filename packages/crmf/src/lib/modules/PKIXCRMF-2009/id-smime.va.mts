/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary id_smime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-smime OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs9(9) 16 }
 * ```
 *
 * @constant
 */
export const id_smime: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    16,
]);

/* eslint-enable */
