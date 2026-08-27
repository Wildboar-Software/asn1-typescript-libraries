/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_ct_authData
 * @description
 *
 * OID for the CMS authenticated-data content type (`id-ct-authData`)
 * ([RFC 5652 §9.1](https://datatracker.ietf.org/doc/html/rfc5652#section-9.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-authData OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) ct(1) 2 }
 * ```
 *
 * @constant
 */
export const id_ct_authData: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    2,
]);

/* eslint-enable */
