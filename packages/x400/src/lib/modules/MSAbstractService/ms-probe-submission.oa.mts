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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    MSProbeSubmissionArgument,
    _decode_MSProbeSubmissionArgument,
    _encode_MSProbeSubmissionArgument,
} from '../MSAbstractService/MSProbeSubmissionArgument.ta.mjs';
import {
    MSProbeSubmissionResult,
    _decode_MSProbeSubmissionResult,
    _encode_MSProbeSubmissionResult,
} from '../MSAbstractService/MSProbeSubmissionResult.ta.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
import { entry_class_error } from '../MSAbstractService/entry-class-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_ms_probe_submission } from '../MSAccessProtocol/op-ms-probe-submission.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary ms_probe_submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-probe-submission ABSTRACT-OPERATION ::= {
 *   ARGUMENT  MSProbeSubmissionArgument
 *   RESULT    MSProbeSubmissionResult
 *   ERRORS
 *     {submission-control-violated | element-of-service-not-subscribed |
 *       originator-invalid | recipient-improperly-specified |
 *       inconsistent-request | security-error | unsupported-critical-function |
 *       remote-bind-error, ... -- 1994 extension additions --, ms-extension-error
 *       | message-group-error | entry-class-error | service-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-ms-probe-submission
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<MSProbeSubmissionArgument, MSProbeSubmissionResult>}
 * @implements {ABSTRACT_OPERATION<MSProbeSubmissionArgument, MSProbeSubmissionResult>}
 */
export const ms_probe_submission: ABSTRACT_OPERATION<
    MSProbeSubmissionArgument,
    MSProbeSubmissionResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_MSProbeSubmissionArgument,
        '&ResultType': _decode_MSProbeSubmissionResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_MSProbeSubmissionArgument,
        '&ResultType': _encode_MSProbeSubmissionResult,
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
    '&operationCode': op_ms_probe_submission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
