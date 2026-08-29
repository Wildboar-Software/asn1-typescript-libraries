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
 * @summary grm_RelationshipMapping
 * @description
 *
 * Registration arc for GRM (X.725) relationship mappings:
 * `{joint-iso-itu-t ms(9) smi(3) part7(7)
 * relationshipMapping(12)}`. Used in protocol to identify a
 * mapping unambiguously. ITU-T Rec. X.725 (11/95)
 * [Annex A](https://www.itu.int/rec/T-REC-X.725-199511-I)
 * REGISTERED AS construct, Annex B.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-RelationshipMapping OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) relationshipMapping(12)}
 * ```
 *
 * @constant
 */
export const grm_RelationshipMapping: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* relationshipMapping */ 12],
    joint_iso_itu_t
);

/* eslint-enable */
