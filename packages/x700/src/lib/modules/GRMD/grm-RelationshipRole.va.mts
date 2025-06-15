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
 * @summary grm_RelationshipRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-RelationshipRole OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) relationshipRole(13)}
 * ```
 *
 * @constant
 */
export const grm_RelationshipRole: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* relationshipRole */ 13],
    joint_iso_itu_t
);

/* eslint-enable */
