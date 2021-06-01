/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta';
export {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta';
import { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa';
export { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa';
import { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa';
export { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa';
import { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa';
export { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa';
import { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa';
export { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa';
import { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa';
export { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa';
import { id_att_message_group_name } from '../MSObjectIdentifiers/id-att-message-group-name.va';
export { id_att_message_group_name } from '../MSObjectIdentifiers/id-att-message-group-name.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION ms_message_group_name */
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
/* END_OF_SYMBOL_DEFINITION ms_message_group_name */

/* eslint-enable */
