/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_ct_contentInfo
 * @description
 *
 * OID identifying the content-information content type
 * (`id-ct-contentInfo`) ([RFC 5652 §3](https://datatracker.ietf.org/doc/html/rfc5652#section-3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-contentInfo OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs9(9) smime(16) ct(1) 6 }
 * ```
 *
 * @constant
 */
export const id_ct_contentInfo: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    6,
]);

/* eslint-enable */
