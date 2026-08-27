/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_data
 * @description
 *
 * OID for the CMS `data` content type: arbitrary octet strings; interpretation
 * is application-defined ([RFC 5652 §4](https://datatracker.ietf.org/doc/html/rfc5652#section-4)).
 * S/MIME uses this for MIME-encoded content.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-data OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs7(7) 1 }
 * ```
 *
 * @constant
 */
export const id_data: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    1,
]);

/* eslint-enable */
