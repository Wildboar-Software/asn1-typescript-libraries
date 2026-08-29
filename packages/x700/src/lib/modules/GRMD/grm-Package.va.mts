/* eslint-disable */
import {
    joint_iso_itu_t,
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
 * @summary grm_Package
 * @description
 *
 * Registration arc for GRM (X.725) packages:
 * `{joint-iso-itu-t ms(9) smi(3) part7(7) package(4)}`.
 * ITU-T Rec. X.725 (11/95)
 * [Annex B.1](https://www.itu.int/rec/T-REC-X.725-199511-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) package(4)}
 * ```
 *
 * @constant
 */
export const grm_Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
