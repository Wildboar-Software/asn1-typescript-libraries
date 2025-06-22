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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import { directoryStringFirstComponentMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/directoryStringFirstComponentMatch.oa.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary characterizedBy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * characterizedBy ATTRIBUTE ::= {
 *   WITH SYNTAX             TemplateLabel
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   ID                      {mkmDirectoryAttributeType  12}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TemplateLabel>}
 * @implements {ATTRIBUTE<TemplateLabel>}
 */
export const characterizedBy: ATTRIBUTE<TemplateLabel> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TemplateLabel,
    },
    encoderFor: {
        '&Type': _encode_TemplateLabel,
    },
    '&equality-match':
        directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [12],
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
