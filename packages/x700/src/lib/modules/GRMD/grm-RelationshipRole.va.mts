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
 * @summary grm_RelationshipRole
 * @description
 *
 * Registration arc for GRM (X.725) relationship roles:
 * `{joint-iso-itu-t ms(9) smi(3) part7(7)
 * relationshipRole(13)}`. A role is the properties common to
 * a particular kind of participant in a managed relationship.
 * ITU-T Rec. X.725 (11/95)
 * [§3.8.16](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * Annex B.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-RelationshipRole OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) relationshipRole(13)}
 * ```
 *
 * @constant
 */
export const grm_RelationshipRole: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* relationshipRole */ 13],
    joint_iso_itu_t
);

/* eslint-enable */
