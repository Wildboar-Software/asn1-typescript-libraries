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
} from '@wildboar/asn1';


/**
 * @summary id_pkcs
 * @description
 *
 * PKCS arc `{iso(1) member-body(2) usa(840) rsadsi(113549)
 * pkcs(1)}`. Ancestor of CMS OIDs in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkcs OBJECT IDENTIFIER ::= { iso(1) member-body(2) usa(840) rsadsi(113549) pkcs(1) }
 * ```
 *
 * @constant
 */
export const id_pkcs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* usa */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
]);

/* eslint-enable */
