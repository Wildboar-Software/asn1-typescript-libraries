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
    DeleteArgument,
    _decode_DeleteArgument,
    _encode_DeleteArgument,
} from '../MSAbstractService/DeleteArgument.ta.mjs';
import {
    DeleteResult,
    _decode_DeleteResult,
    _encode_DeleteResult,
} from '../MSAbstractService/DeleteResult.ta.mjs';
import { delete_error } from '../MSAbstractService/delete-error.oa.mjs';
import { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa.mjs';
import { range_error } from '../MSAbstractService/range-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { sequence_number_error } from '../MSAbstractService/sequence-number-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { entry_class_error } from '../MSAbstractService/entry-class-error.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_delete } from '../MSAccessProtocol/op-delete.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary delete_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delete ABSTRACT-OPERATION ::= {
 *   ARGUMENT  DeleteArgument
 *   RESULT    DeleteResult
 *   ERRORS
 *     {delete-error | invalid-parameters-error | range-error | security-error |
 *       sequence-number-error | service-error,
 *       ... -- 1994 extension additions --, entry-class-error |
 *       ms-extension-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-delete
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<DeleteArgument, DeleteResult>}
 * @implements {ABSTRACT_OPERATION<DeleteArgument, DeleteResult>}
 */
export const delete_: ABSTRACT_OPERATION<DeleteArgument, DeleteResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_DeleteArgument,
        '&ResultType': _decode_DeleteResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_DeleteArgument,
        '&ResultType': _encode_DeleteResult,
    },
    '&Errors': [
        delete_error,
        invalid_parameters_error,
        range_error,
        security_error,
        sequence_number_error,
        service_error,
        /* OBJECT_SET_EXTENSION_MARKER */ entry_class_error,
        ms_extension_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_delete /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
