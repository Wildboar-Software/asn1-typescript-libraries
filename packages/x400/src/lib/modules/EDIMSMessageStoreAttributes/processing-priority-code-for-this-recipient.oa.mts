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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    ProcessingPriorityCodeField,
    _decode_ProcessingPriorityCodeField,
    _encode_ProcessingPriorityCodeField,
} from '../EDIMSInformationObjects/ProcessingPriorityCodeField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { id_rat_processing_priority_code_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-processing-priority-code-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

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

/* eslint-enable */
