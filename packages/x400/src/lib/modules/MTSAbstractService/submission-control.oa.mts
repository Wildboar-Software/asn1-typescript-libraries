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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    SubmissionControlArgument,
    _decode_SubmissionControlArgument,
    _encode_SubmissionControlArgument,
} from '../MTSAbstractService/SubmissionControlArgument.ta.mjs';
import {
    SubmissionControlResult,
    _decode_SubmissionControlResult,
    _encode_SubmissionControlResult,
} from '../MTSAbstractService/SubmissionControlResult.ta.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_submission_control } from '../MTSAccessProtocol/op-submission-control.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary submission_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * submission-control ABSTRACT-OPERATION ::= {
 *   ARGUMENT         SubmissionControlArgument
 *   RESULT           SubmissionControlResult
 *   ERRORS           {security-error | remote-bind-error}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {3}
 *   CODE             op-submission-control
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<SubmissionControlArgument, SubmissionControlResult>}
 * @implements {ABSTRACT_OPERATION<SubmissionControlArgument, SubmissionControlResult>}
 */
export const submission_control: ABSTRACT_OPERATION<
    SubmissionControlArgument,
    SubmissionControlResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_SubmissionControlArgument,
        '&ResultType': _decode_SubmissionControlResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_SubmissionControlArgument,
        '&ResultType': _encode_SubmissionControlResult,
    },
    '&Errors': [security_error, remote_bind_error] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_submission_control /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
