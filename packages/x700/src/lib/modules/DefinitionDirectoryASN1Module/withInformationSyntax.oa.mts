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
    WithSyntax,
    _decode_WithSyntax,
    _encode_WithSyntax,
} from '../DefinitionASN1Module/WithSyntax.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary withInformationSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * withInformationSyntax ATTRIBUTE ::= {
 *   WITH SYNTAX   WithSyntax
 *   SINGLE VALUE  TRUE
 *   ID            {mkmDirectoryAttributeType  41}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<WithSyntax>}
 * @implements {ATTRIBUTE<WithSyntax>}
 */
export const withInformationSyntax: ATTRIBUTE<WithSyntax> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_WithSyntax,
    },
    encoderFor: {
        '&Type': _encode_WithSyntax,
    },
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [41],
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
