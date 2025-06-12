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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    ProcessingPriorityCodeField,
    _decode_ProcessingPriorityCodeField,
    _encode_ProcessingPriorityCodeField,
} from '../EDIMSInformationObjects/ProcessingPriorityCodeField.ta.mjs';
export {
    ProcessingPriorityCodeField,
    _decode_ProcessingPriorityCodeField,
    _encode_ProcessingPriorityCodeField,
} from '../EDIMSInformationObjects/ProcessingPriorityCodeField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
export { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { id_rat_processing_priority_code_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-processing-priority-code-for-this-recipient.va.mjs';
export { id_rat_processing_priority_code_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-processing-priority-code-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION processing_priority_code_for_this_recipient */
/**
 * @summary processing_priority_code_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * processing-priority-code-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ProcessingPriorityCodeField,
 *   EQUALITY MATCHING-RULE  mSStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-processing-priority-code-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ProcessingPriorityCodeField>}
 * @implements {X413ATTRIBUTE<ProcessingPriorityCodeField>}
 */
export const processing_priority_code_for_this_recipient: X413ATTRIBUTE<ProcessingPriorityCodeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ProcessingPriorityCodeField,
    },
    encoderFor: {
        '&Type': _encode_ProcessingPriorityCodeField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_processing_priority_code_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION processing_priority_code_for_this_recipient */

/* eslint-enable */
