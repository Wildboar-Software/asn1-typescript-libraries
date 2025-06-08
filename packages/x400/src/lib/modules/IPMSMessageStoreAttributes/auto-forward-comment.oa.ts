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
    AutoForwardCommentField,
    _decode_AutoForwardCommentField,
    _encode_AutoForwardCommentField,
} from '../IPMSInformationObjects/AutoForwardCommentField.ta';
export {
    AutoForwardCommentField,
    _decode_AutoForwardCommentField,
    _encode_AutoForwardCommentField,
} from '../IPMSInformationObjects/AutoForwardCommentField.ta';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa';
export { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa';
export { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa';
import { id_nat_auto_forward_comment } from '../IPMSObjectIdentifiers/id-nat-auto-forward-comment.va';
export { id_nat_auto_forward_comment } from '../IPMSObjectIdentifiers/id-nat-auto-forward-comment.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION auto_forward_comment */
/**
 * @summary auto_forward_comment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-forward-comment X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     AutoForwardCommentField,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID                        id-nat-auto-forward-comment
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AutoForwardCommentField>}
 * @implements {X413ATTRIBUTE<AutoForwardCommentField>}
 */
export const auto_forward_comment: X413ATTRIBUTE<AutoForwardCommentField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AutoForwardCommentField,
    },
    encoderFor: {
        '&Type': _encode_AutoForwardCommentField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_auto_forward_comment /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_forward_comment */

/* eslint-enable */
