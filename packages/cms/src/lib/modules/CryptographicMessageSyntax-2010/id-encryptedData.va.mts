/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_encryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-encryptedData OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs7(7) 6 }
 * ```
 *
 * @constant
 */
export const id_encryptedData: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    6,
]);

/* eslint-enable */
