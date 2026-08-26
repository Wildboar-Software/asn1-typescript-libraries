/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";

/**
 * @summary id_ct_trustAnchorList
 * @description
 *
 * Object identifier for `TrustAnchorList` payloads in CMS structures
 * (e.g., `SignedData` content type)
 * ([RFC 5914 §3](https://datatracker.ietf.org/doc/html/rfc5914#section-3);
 * [RFC 5652](https://datatracker.ietf.org/doc/html/rfc5652)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-trustAnchorList      OBJECT IDENTIFIER ::= { iso(1)
 *     member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9)
 *     id-smime(16) id-ct(1) 34 }
 * ```
 *
 * @constant
 */
export
const id_ct_trustAnchorList: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* id-smime */ 16,
    /* id-ct */ 1,
    34,
]);

/* eslint-enable */
