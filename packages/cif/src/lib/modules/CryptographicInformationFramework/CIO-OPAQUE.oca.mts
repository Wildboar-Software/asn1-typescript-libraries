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
 * @summary CIO_OPAQUE
 * @description
 *
 * `TYPE-IDENTIFIER` used for opaque certificate, data-object, and generic value
 * syntaxes (`AllowedCertificates`, `AllowedOidDOs`, SPKI/PGP/WTLS certificate
 * `value`). Profiles bind `&id` to `&Type`. ISO/IEC 7816-15:2016 §8.2.16,
 * §8.7.4–§8.8.4, Annex A.
 *
 * @interface
 */
export
type CIO_OPAQUE = TYPE_IDENTIFIER;

/* eslint-enable */
