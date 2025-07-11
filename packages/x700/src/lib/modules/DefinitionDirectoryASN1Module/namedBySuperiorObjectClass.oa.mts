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
    NamingObjectClass,
    _decode_NamingObjectClass,
    _encode_NamingObjectClass,
} from '../DefinitionASN1Module/NamingObjectClass.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary namedBySuperiorObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * namedBySuperiorObjectClass ATTRIBUTE ::= {
 *   WITH SYNTAX   NamingObjectClass
 *   SINGLE VALUE  TRUE
 *   ID            {mkmDirectoryAttributeType  29}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<NamingObjectClass>}
 * @implements {ATTRIBUTE<NamingObjectClass>}
 */
export const namedBySuperiorObjectClass: ATTRIBUTE<NamingObjectClass> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NamingObjectClass,
    },
    encoderFor: {
        '&Type': _encode_NamingObjectClass,
    },
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [29],
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
