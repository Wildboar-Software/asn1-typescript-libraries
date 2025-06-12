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
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    MSMessageSubmissionArgument,
    _decode_MSMessageSubmissionArgument,
    _encode_MSMessageSubmissionArgument,
} from '../MSAbstractService/MSMessageSubmissionArgument.ta.mjs';
export {
    MSMessageSubmissionArgument,
    _decode_MSMessageSubmissionArgument,
    _encode_MSMessageSubmissionArgument,
} from '../MSAbstractService/MSMessageSubmissionArgument.ta.mjs';
import {
    MSMessageSubmissionResult,
    _decode_MSMessageSubmissionResult,
    _encode_MSMessageSubmissionResult,
} from '../MSAbstractService/MSMessageSubmissionResult.ta.mjs';
export {
    MSMessageSubmissionResult,
    _decode_MSMessageSubmissionResult,
    _encode_MSMessageSubmissionResult,
} from '../MSAbstractService/MSMessageSubmissionResult.ta.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
export { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
export { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
export { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
export { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
export { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
export { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
export { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
export { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
import { entry_class_error } from '../MSAbstractService/entry-class-error.oa.mjs';
export { entry_class_error } from '../MSAbstractService/entry-class-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
export { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_ms_message_submission } from '../MSAccessProtocol/op-ms-message-submission.va.mjs';
export { op_ms_message_submission } from '../MSAccessProtocol/op-ms-message-submission.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION ms_message_submission */
/**
 * @summary ms_message_submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-message-submission ABSTRACT-OPERATION ::= {
 *   ARGUMENT  MSMessageSubmissionArgument
 *   RESULT    MSMessageSubmissionResult
 *   ERRORS
 *     {submission-control-violated | element-of-service-not-subscribed |
 *       originator-invalid | recipient-improperly-specified |
 *       inconsistent-request | security-error | unsupported-critical-function |
 *       remote-bind-error, ... -- 1994 extension additions --, ms-extension-error
 *       | message-group-error | entry-class-error | service-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-ms-message-submission
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<MSMessageSubmissionArgument, MSMessageSubmissionResult>}
 * @implements {ABSTRACT_OPERATION<MSMessageSubmissionArgument, MSMessageSubmissionResult>}
 */
export const ms_message_submission: ABSTRACT_OPERATION<
    MSMessageSubmissionArgument,
    MSMessageSubmissionResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_MSMessageSubmissionArgument,
        '&ResultType': _decode_MSMessageSubmissionResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_MSMessageSubmissionArgument,
        '&ResultType': _encode_MSMessageSubmissionResult,
    },
    '&Errors': [
        submission_control_violated,
        element_of_service_not_subscribed,
        originator_invalid,
        recipient_improperly_specified,
        inconsistent_request,
        security_error,
        unsupported_critical_function,
        remote_bind_error,
        /* OBJECT_SET_EXTENSION_MARKER */ ms_extension_error,
        message_group_error,
        entry_class_error,
        service_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_ms_message_submission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_message_submission */

/* eslint-enable */
