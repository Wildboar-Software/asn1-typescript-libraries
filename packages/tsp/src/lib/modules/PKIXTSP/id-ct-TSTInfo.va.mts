/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary id_ct_TSTInfo
 * @description
 *
 * CMS content type OID for `TSTInfo`: used as
 * `SignedData.encapContentInfo.eContentType` inside a `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 * The corresponding `eContent` is the DER encoding of `TSTInfo`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-TSTInfo  OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) ct(1) 4}
 * ```
 *
 * @constant
 */
export const id_ct_TSTInfo: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    4,
]);

/* eslint-enable */
