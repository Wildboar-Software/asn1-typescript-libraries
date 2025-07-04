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
    ListArgument,
    _decode_ListArgument,
    _encode_ListArgument,
} from '../MSAbstractService/ListArgument.ta.mjs';
import {
    ListResult,
    _decode_ListResult,
    _encode_ListResult,
} from '../MSAbstractService/ListResult.ta.mjs';
import { attribute_error } from '../MSAbstractService/attribute-error.oa.mjs';
import { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa.mjs';
import { range_error } from '../MSAbstractService/range-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { entry_class_error } from '../MSAbstractService/entry-class-error.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_list } from '../MSAccessProtocol/op-list.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * list ABSTRACT-OPERATION ::= {
 *   ARGUMENT  ListArgument
 *   RESULT    ListResult
 *   ERRORS
 *     {attribute-error | invalid-parameters-error | range-error | security-error
 *       | service-error, ... -- 1994 extension additions --, entry-class-error |
 *       ms-extension-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-list
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<ListArgument, ListResult>}
 * @implements {ABSTRACT_OPERATION<ListArgument, ListResult>}
 */
export const list: ABSTRACT_OPERATION<ListArgument, ListResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_ListArgument,
        '&ResultType': _decode_ListResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_ListArgument,
        '&ResultType': _encode_ListResult,
    },
    '&Errors': [
        attribute_error,
        invalid_parameters_error,
        range_error,
        security_error,
        service_error,
        /* OBJECT_SET_EXTENSION_MARKER */ entry_class_error,
        ms_extension_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
