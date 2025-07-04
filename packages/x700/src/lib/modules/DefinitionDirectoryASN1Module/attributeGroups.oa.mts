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
    AttributeGroups,
    _decode_AttributeGroups,
    _encode_AttributeGroups,
} from '../DefinitionASN1Module/AttributeGroups.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary attributeGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeGroups ATTRIBUTE ::= {
 *   WITH SYNTAX  AttributeGroups
 *   ID           {mkmDirectoryAttributeType  9}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttributeGroups>}
 * @implements {ATTRIBUTE<AttributeGroups>}
 */
export const attributeGroups: ATTRIBUTE<AttributeGroups> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AttributeGroups,
    },
    encoderFor: {
        '&Type': _encode_AttributeGroups,
    },
    '&id': _OID.fromParts(
        [9],
        mkmDirectoryAttributeType
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
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
