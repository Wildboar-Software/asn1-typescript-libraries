/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_envelopedData
 * @description
 *
 * OID for the CMS enveloped-data content type (`id-envelopedData`)
 * ([RFC 5652 §6.1](https://datatracker.ietf.org/doc/html/rfc5652#section-6.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-envelopedData OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs7(7) 3 }
 * ```
 *
 * @constant
 */
export const id_envelopedData: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    3,
]);

/* eslint-enable */
