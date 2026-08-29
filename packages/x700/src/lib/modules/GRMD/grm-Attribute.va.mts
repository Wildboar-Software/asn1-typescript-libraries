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
 * @summary grm_Attribute
 * @description
 *
 * Registration arc for GRM (X.725) attributes:
 * `{joint-iso-itu-t ms(9) smi(3) part7(7) attribute(7)}`.
 * Assigned values (Annex B.4): 1 `relationshipName`,
 * 2 `relationshipClass`, 3 `relationshipMapping`. Derived
 * participant-pointer attributes identify objects fulfilling a
 * role. ITU-T Rec. X.725 (11/95)
 * [§7.4.3](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * Annex B.1, B.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-Attribute OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) attribute(7)}
 * ```
 *
 * @constant
 */
export const grm_Attribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* attribute */ 7],
    joint_iso_itu_t
);

/* eslint-enable */
