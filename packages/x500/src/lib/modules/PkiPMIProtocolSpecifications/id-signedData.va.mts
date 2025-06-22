/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/**
 * @summary id_signedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signedData OBJECT IDENTIFIER ::= {iso(1) member-body(2)
 * us(840)rsadsi(113549) pkcs(1) pkcs7(7) 2}
 * ```
 *
 * @constant
 */
export const id_signedData: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

/* eslint-enable */
