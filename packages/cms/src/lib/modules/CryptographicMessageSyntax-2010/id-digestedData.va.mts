/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_digestedData
 * @description
 *
 * OID for the CMS digested-data content type (`id-digestedData`)
 * ([RFC 5652 §7](https://datatracker.ietf.org/doc/html/rfc5652#section-7)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-digestedData OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs7(7) 5 }
 * ```
 *
 * @constant
 */
export const id_digestedData: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    5,
]);

/* eslint-enable */
