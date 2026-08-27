/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_encryptedData
 * @description
 *
 * OID for the CMS encrypted-data content type (`id-encryptedData`)
 * ([RFC 5652 §8](https://datatracker.ietf.org/doc/html/rfc5652#section-8)).
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
