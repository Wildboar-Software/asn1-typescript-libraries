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
    Register_MSArgument,
    _decode_Register_MSArgument,
    _encode_Register_MSArgument,
} from '../MSAbstractService/Register-MSArgument.ta.mjs';
import {
    Register_MSResult,
    _decode_Register_MSResult,
    _encode_Register_MSResult,
} from '../MSAbstractService/Register-MSResult.ta.mjs';
import { attribute_error } from '../MSAbstractService/attribute-error.oa.mjs';
import { auto_action_request_error } from '../MSAbstractService/auto-action-request-error.oa.mjs';
import { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa.mjs';
import { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa.mjs';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { register_ms_error } from '../MSAbstractService/register-ms-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_register_ms } from '../MSAccessProtocol/op-register-ms.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary register_MS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * register-MS ABSTRACT-OPERATION ::= {
 *   ARGUMENT  Register-MSArgument
 *   RESULT    Register-MSResult
 *   ERRORS
 *     {attribute-error | auto-action-request-error | invalid-parameters-error |
 *       security-error | service-error | old-credentials-incorrectly-specified |
 *       new-credentials-unacceptable, ... -- 1994 extension additions --,
 *       message-group-error | ms-extension-error | register-ms-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-register-ms
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<Register_MSArgument, Register_MSResult>}
 * @implements {ABSTRACT_OPERATION<Register_MSArgument, Register_MSResult>}
 */
export const register_MS: ABSTRACT_OPERATION<
    Register_MSArgument,
    Register_MSResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_Register_MSArgument,
        '&ResultType': _decode_Register_MSResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_Register_MSArgument,
        '&ResultType': _encode_Register_MSResult,
    },
    '&Errors': [
        attribute_error,
        auto_action_request_error,
        invalid_parameters_error,
        security_error,
        service_error,
        old_credentials_incorrectly_specified,
        new_credentials_unacceptable,
        /* OBJECT_SET_EXTENSION_MARKER */ message_group_error,
        ms_extension_error,
        register_ms_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_register_ms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
