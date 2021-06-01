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
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
export {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa';
export { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa';
export { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa';
import { id_att_message_submission_time } from '../MSObjectIdentifiers/id-att-message-submission-time.va';
export { id_att_message_submission_time } from '../MSObjectIdentifiers/id-att-message-submission-time.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION mt_message_submission_time */
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
/* END_OF_SYMBOL_DEFINITION mt_message_submission_time */

/* eslint-enable */
