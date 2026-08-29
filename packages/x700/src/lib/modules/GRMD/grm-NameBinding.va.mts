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
 * @summary grm_NameBinding
 * @description
 *
 * Registration arc for GRM (X.725) name bindings:
 * `{joint-iso-itu-t ms(9) smi(3) part7(7) nameBinding(6)}`.
 * Assigned value: 1 `genericRelationshipObject-system`
 * (generic relationship object named under `system` by
 * `relationshipName`). ITU-T Rec. X.725 (11/95)
 * [Annex B.1](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * B.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-NameBinding OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const grm_NameBinding: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* nameBinding */ 6],
    joint_iso_itu_t
);

/* eslint-enable */
