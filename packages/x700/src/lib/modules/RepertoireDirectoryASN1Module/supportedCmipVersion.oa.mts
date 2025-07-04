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
    ProtocolVersion,
    _decode_ProtocolVersion,
    _encode_ProtocolVersion,
} from '@wildboar/cmip';
import { bitStringMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary supportedCmipVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedCmipVersion ATTRIBUTE ::= {
 *   WITH SYNTAX             ProtocolVersion
 *   EQUALITY MATCHING RULE  bitStringMatch
 *   SINGLE VALUE            TRUE
 *   ID                      {mkmDirectoryAttributeType  2}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ProtocolVersion>}
 * @implements {ATTRIBUTE<ProtocolVersion>}
 */
export const supportedCmipVersion: ATTRIBUTE<ProtocolVersion> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ProtocolVersion,
    },
    encoderFor: {
        '&Type': _encode_ProtocolVersion,
    },
    '&equality-match': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [2],
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
