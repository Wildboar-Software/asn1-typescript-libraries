/* eslint-disable */
import {
    iso,
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
 * @summary id_tai_at_BiometricInformationTemplate
 * @description
 *
 * Identifies `biometricInformationTemplate`. This is the CBEFF
 * TLV-encoded patron format OID
 * `{iso registration-authority cbeff(19785)
 * biometric-organization(0) jtc1-sc37(257) patronformat(1)
 * tlv-encoded(5)}`, not an `{id-tai-at n}` assignment. ITU-T
 * Rec. X.1089 (05/2008)
 * [§8.6](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai-at-BiometricInformationTemplate OBJECT IDENTIFIER ::= {iso registration-authority cbeff(19785) biometric-organization(0)
 *    jtc1-sc37(257) patronformat(1) tlv-encoded(5)}
 * ```
 * 
 * @constant
 */
export
const id_tai_at_BiometricInformationTemplate: OBJECT_IDENTIFIER = _OID.fromParts([
    /* registration-authority */ 1,
    /* cbeff */ 19785,
    /* biometric-organization */ 0,
    /* jtc1-sc37 */ 257,
    /* patronformat */ 1,
    /* tlv-encoded */ 5,
], iso);

/* eslint-enable */
