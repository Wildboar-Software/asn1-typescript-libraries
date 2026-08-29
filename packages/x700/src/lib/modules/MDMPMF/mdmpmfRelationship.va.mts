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
 * @summary mdmpmfRelationship
 * @description
 *
 * Arc for MDMPMF relationship classes: `jurisdictionRelationship`
 * (1) (policy + domain) and `administrativeAspectRelationship` (2)
 * (administrative aspect + administered object). ITU-T Rec. X.749
 * (08/97) [A.2](https://www.itu.int/rec/T-REC-X.749-199708-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfRelationship OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) relationship(11)}
 * ```
 *
 * @constant
 */
export const mdmpmfRelationship: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* relationship */ 11],
    joint_iso_itu_t
);

/* eslint-enable */
