/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
 * @summary PKCS7_CONTENT_TYPE
 * @description
 *
 * Alias for ASN.1 `TYPE-IDENTIFIER`, used by
 * `trust-anchor-list` to identify `TrustAnchorList` content
 * ([RFC 5914 Appendix A.1](https://datatracker.ietf.org/doc/html/rfc5914#appendix-A.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS7-CONTENT-TYPE ::= TYPE-IDENTIFIER
 * ```
 */
export
type PKCS7_CONTENT_TYPE <Type> = TYPE_IDENTIFIER <Type>;

/* eslint-enable */
