/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/InformationFramework';
import {
    MappedRelationshipClass,
    _decode_MappedRelationshipClass,
    _encode_MappedRelationshipClass,
} from '../GrmAttributeDefinitionModule/MappedRelationshipClass.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary mappedRelationshipClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mappedRelationshipClass ATTRIBUTE ::= {
 *   WITH SYNTAX   MappedRelationshipClass
 *   SINGLE VALUE  TRUE
 *   ID            {mkmDirectoryAttributeType  47}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MappedRelationshipClass>}
 * @implements {ATTRIBUTE<MappedRelationshipClass>}
 */
export const mappedRelationshipClass: ATTRIBUTE<MappedRelationshipClass> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MappedRelationshipClass,
    },
    encoderFor: {
        '&Type': _encode_MappedRelationshipClass,
    },
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [47],
        mkmDirectoryAttributeType
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
