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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta.mjs';
import { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa.mjs';
import { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa.mjs';
import { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa.mjs';
import { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa.mjs';
import { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa.mjs';
import { id_att_message_group_name } from '../MSObjectIdentifiers/id-att-message-group-name.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_message_group_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-message-group-name X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   MessageGroupName,
 *   EQUALITY MATCHING-RULE  mSStringListMatch,
 *   OTHER MATCHING-RULES
 *     {mSSingleSubstringListMatch | mSStringListElementsMatch |
 *       mSSingleSubstringListElementsMatch | valueCountMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-att-message-group-name
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageGroupName>}
 * @implements {X413ATTRIBUTE<MessageGroupName>}
 */
export const ms_message_group_name: X413ATTRIBUTE<MessageGroupName> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageGroupName,
    },
    encoderFor: {
        '&Type': _encode_MessageGroupName,
    },
    '&equalityMatch': mSStringListMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        mSSingleSubstringListMatch,
        mSStringListElementsMatch,
        mSSingleSubstringListElementsMatch,
        valueCountMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_group_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
