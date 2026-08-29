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
 * @summary RelationshipMapping
 * @description
 *
 * Object identifier of a GRM relationship mapping: a named
 * specification of how a managed relationship class is
 * represented in terms of managed object classes (naming,
 * attributes, relationship object, or management operations).
 * Syntax of the `relationshipMapping` attribute of
 * `genericRelationshipObject`, which identifies the mapping in
 * effect. There may be more than one mapping per class.
 * ITU-T Rec. X.725 (11/95)
 * [§3.8.14](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * §7.4, §7.4.3, Annex B.4, B.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipMapping  ::=  OBJECT IDENTIFIER
 * ```
 */
export type RelationshipMapping = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_RelationshipMapping = $._decodeObjectIdentifier;


export const _encode_RelationshipMapping = $._encodeObjectIdentifier;


/* eslint-enable */
