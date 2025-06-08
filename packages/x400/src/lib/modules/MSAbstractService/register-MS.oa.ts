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
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
import {
    Register_MSArgument,
    _decode_Register_MSArgument,
    _encode_Register_MSArgument,
} from '../MSAbstractService/Register-MSArgument.ta';
export {
    Register_MSArgument,
    _decode_Register_MSArgument,
    _encode_Register_MSArgument,
} from '../MSAbstractService/Register-MSArgument.ta';
import {
    Register_MSResult,
    _decode_Register_MSResult,
    _encode_Register_MSResult,
} from '../MSAbstractService/Register-MSResult.ta';
export {
    Register_MSResult,
    _decode_Register_MSResult,
    _encode_Register_MSResult,
} from '../MSAbstractService/Register-MSResult.ta';
import { attribute_error } from '../MSAbstractService/attribute-error.oa';
export { attribute_error } from '../MSAbstractService/attribute-error.oa';
import { auto_action_request_error } from '../MSAbstractService/auto-action-request-error.oa';
export { auto_action_request_error } from '../MSAbstractService/auto-action-request-error.oa';
import { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa';
export { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { service_error } from '../MSAbstractService/service-error.oa';
export { service_error } from '../MSAbstractService/service-error.oa';
import { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa';
export { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa';
import { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa';
export { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa';
import { message_group_error } from '../MSAbstractService/message-group-error.oa';
export { message_group_error } from '../MSAbstractService/message-group-error.oa';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa';
export { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa';
import { register_ms_error } from '../MSAbstractService/register-ms-error.oa';
export { register_ms_error } from '../MSAbstractService/register-ms-error.oa';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
import { op_register_ms } from '../MSAccessProtocol/op-register-ms.va';
export { op_register_ms } from '../MSAccessProtocol/op-register-ms.va';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION register_MS */
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
/* END_OF_SYMBOL_DEFINITION register_MS */

/* eslint-enable */
