/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_ct_receipt
 * @description
 *
 * Content-type OID for `Receipt`
 * (`{ iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-ct(1) 1 }`).
 * Used as `SignedData.encapContentInfo.eContentType` and in
 * `contentHints` when a receipt is encrypted
 * ([RFC 2634 §2.8](https://datatracker.ietf.org/doc/html/rfc2634#section-2.8); [RFC 2634 §2.4](https://datatracker.ietf.org/doc/html/rfc2634#section-2.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-receipt OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840)
 *     rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-ct(1) 1}
 * ```
 *
 * @constant
 */
export const id_ct_receipt: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-ct */ 1,
    1,
]);

/* eslint-enable */
