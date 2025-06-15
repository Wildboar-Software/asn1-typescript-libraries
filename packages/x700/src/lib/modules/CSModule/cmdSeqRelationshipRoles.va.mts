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
 * @summary cmdSeqRelationshipRoles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmdSeqRelationshipRoles OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part21(21) relationshipRole(13)}
 * ```
 *
 * @constant
 */
export const cmdSeqRelationshipRoles: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part21 */ 21, /* relationshipRole */ 13],
    joint_iso_itu_t
);

/* eslint-enable */
