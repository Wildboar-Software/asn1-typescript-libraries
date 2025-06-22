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
} from 'asn1-ts';

/**
 * @summary mdmpmfRelationshipMapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfRelationshipMapping OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) relationshipMapping(12)}
 * ```
 *
 * @constant
 */
export const mdmpmfRelationshipMapping: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part19 */ 19,
        /* relationshipMapping */ 12,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
