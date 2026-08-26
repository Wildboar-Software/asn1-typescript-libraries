/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_contentType
 * @description
 *
 * OID for the content-type signed/authenticated attribute
 * (`id-contentType`) ([RFC 5652 §11.1](https://datatracker.ietf.org/doc/html/rfc5652#section-11.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contentType OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs9(9) 3 }
 * ```
 *
 * @constant
 */
export const id_contentType: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    3,
]);

/* eslint-enable */
