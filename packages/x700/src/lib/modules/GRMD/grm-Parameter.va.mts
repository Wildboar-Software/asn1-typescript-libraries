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
 * @summary grm_Parameter
 * @description
 *
 * Registration arc for GRM (X.725) parameters:
 * `{joint-iso-itu-t ms(9) smi(3) part7(7) parameter(5)}`.
 * Assigned values (Annex B.5): 1 `noSuchObject` (unknown
 * name in bind; value is that name), 2 `roleInstanceConflict`
 * (class not permitted by the mapping; value is that name),
 * 3 `roleCardinalityViolation` (null),
 * 4 `relationshipCardinalityViolation` (null). ITU-T Rec.
 * X.725 (11/95)
 * [§8.6](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * Annex B.1, B.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-Parameter OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) parameter(5)}
 * ```
 *
 * @constant
 */
export const grm_Parameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* parameter */ 5],
    joint_iso_itu_t
);

/* eslint-enable */
