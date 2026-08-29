/* eslint-disable */
import {
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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RelationshipClass
 * @description
 *
 * Object identifier of a GRM managed relationship class: a
 * named set of managed relationships sharing the same
 * definition. Syntax of the `relationshipClass` attribute of
 * `genericRelationshipObject`. ITU-T Rec. X.725 (11/95)
 * [§3.8.5](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * §3.8.15, §7.4.3, Annex B.4, B.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipClass  ::=  OBJECT IDENTIFIER
 * ```
 */
export type RelationshipClass = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_RelationshipClass = $._decodeObjectIdentifier;


export const _encode_RelationshipClass = $._encodeObjectIdentifier;


/* eslint-enable */
