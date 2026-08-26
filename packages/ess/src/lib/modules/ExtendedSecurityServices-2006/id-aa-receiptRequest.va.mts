/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_receiptRequest
 * @description
 *
 * Signed-attribute OID for `ReceiptRequest`
 * (`{ iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-aa(2) 1 }`)
 * ([RFC 2634 §2.7](https://datatracker.ietf.org/doc/html/rfc2634#section-2.7)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-receiptRequest OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-aa(2) 1}
 * ```
 *
 * @constant
 */
export const id_aa_receiptRequest: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    1,
]);

/* eslint-enable */
