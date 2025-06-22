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
} from 'asn1-ts';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    MatchesFor,
    _decode_MatchesFor,
    _encode_MatchesFor,
} from '../DefinitionASN1Module/MatchesFor.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary matchesFor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchesFor ATTRIBUTE ::= {
 *   WITH SYNTAX             MatchesFor
 *   EQUALITY MATCHING RULE  bitStringMatch
 *   SINGLE VALUE            TRUE
 *   ID                      {mkmDirectoryAttributeType  26}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MatchesFor>}
 * @implements {ATTRIBUTE<MatchesFor>}
 */
export const matchesFor: ATTRIBUTE<MatchesFor> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MatchesFor,
    },
    encoderFor: {
        '&Type': _encode_MatchesFor,
    },
    '&equality-match': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [26],
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
