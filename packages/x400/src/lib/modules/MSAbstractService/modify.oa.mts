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
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import {
    ModifyArgument,
    _decode_ModifyArgument,
    _encode_ModifyArgument,
} from '../MSAbstractService/ModifyArgument.ta.mjs';
import {
    ModifyResult,
    _decode_ModifyResult,
    _encode_ModifyResult,
} from '../MSAbstractService/ModifyResult.ta.mjs';
import { attribute_error } from '../MSAbstractService/attribute-error.oa.mjs';
import { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { sequence_number_error } from '../MSAbstractService/sequence-number-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { modify_error } from '../MSAbstractService/modify-error.oa.mjs';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
import { entry_class_error } from '../MSAbstractService/entry-class-error.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_modify } from '../MSAccessProtocol/op-modify.va.mjs';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary modify
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modify ABSTRACT-OPERATION ::= {
 *   ARGUMENT  ModifyArgument
 *   RESULT    ModifyResult
 *   ERRORS
 *     {attribute-error | invalid-parameters-error | security-error |
 *       sequence-number-error | service-error | modify-error |
 *       message-group-error | entry-class-error | ms-extension-error,
 *       ... -- For future extension additions --}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-modify
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<ModifyArgument, ModifyResult>}
 * @implements {ABSTRACT_OPERATION<ModifyArgument, ModifyResult>}
 */
export const modify: ABSTRACT_OPERATION<ModifyArgument, ModifyResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_ModifyArgument,
        '&ResultType': _decode_ModifyResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_ModifyArgument,
        '&ResultType': _encode_ModifyResult,
    },
    '&Errors': [
        attribute_error,
        invalid_parameters_error,
        security_error,
        sequence_number_error,
        service_error,
        modify_error,
        message_group_error,
        entry_class_error,
        ms_extension_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_modify /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
