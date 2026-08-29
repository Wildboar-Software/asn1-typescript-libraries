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
 * @summary part17MRelClass
 * @description
 *
 * Arc for change-over managed relationship classes:
 * `changeOverRelationship` (1). ITU-T Rec. X.751 (11/95)
 * [A.1](https://www.itu.int/rec/T-REC-X.751-199511-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part17MRelClass OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part17(17) relationshipClass(11)}
 * ```
 *
 * @constant
 */
export const part17MRelClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part17 */ 17, /* relationshipClass */ 11],
    joint_iso_itu_t
);

/* eslint-enable */
