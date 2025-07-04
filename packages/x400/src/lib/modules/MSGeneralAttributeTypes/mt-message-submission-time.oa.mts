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
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_message_submission_time } from '../MSObjectIdentifiers/id-att-message-submission-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_message_submission_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-submission-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   MessageSubmissionTime,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-message-submission-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageSubmissionTime>}
 * @implements {X413ATTRIBUTE<MessageSubmissionTime>}
 */
export const mt_message_submission_time: X413ATTRIBUTE<MessageSubmissionTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageSubmissionTime,
    },
    encoderFor: {
        '&Type': _encode_MessageSubmissionTime,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_submission_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
