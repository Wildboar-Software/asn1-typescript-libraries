/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_messageDigest
 * @description
 *
 * OID for the message-digest signed/authenticated attribute
 * (`id-messageDigest`) ([RFC 5652 §11.2](https://datatracker.ietf.org/doc/html/rfc5652#section-11.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageDigest OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs9(9) 4 }
 * ```
 *
 * @constant
 */
export const id_messageDigest: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    4,
]);

/* eslint-enable */
