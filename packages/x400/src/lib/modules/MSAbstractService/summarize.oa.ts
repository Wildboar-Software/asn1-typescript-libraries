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
    SummarizeArgument,
    _decode_SummarizeArgument,
    _encode_SummarizeArgument,
} from '../MSAbstractService/SummarizeArgument.ta';
export {
    SummarizeArgument,
    _decode_SummarizeArgument,
    _encode_SummarizeArgument,
} from '../MSAbstractService/SummarizeArgument.ta';
import {
    SummarizeResult,
    _decode_SummarizeResult,
    _encode_SummarizeResult,
} from '../MSAbstractService/SummarizeResult.ta';
export {
    SummarizeResult,
    _decode_SummarizeResult,
    _encode_SummarizeResult,
} from '../MSAbstractService/SummarizeResult.ta';
import { attribute_error } from '../MSAbstractService/attribute-error.oa';
export { attribute_error } from '../MSAbstractService/attribute-error.oa';
import { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa';
export { invalid_parameters_error } from '../MSAbstractService/invalid-parameters-error.oa';
import { range_error } from '../MSAbstractService/range-error.oa';
export { range_error } from '../MSAbstractService/range-error.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { service_error } from '../MSAbstractService/service-error.oa';
export { service_error } from '../MSAbstractService/service-error.oa';
import { entry_class_error } from '../MSAbstractService/entry-class-error.oa';
export { entry_class_error } from '../MSAbstractService/entry-class-error.oa';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa';
export { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
import { op_summarize } from '../MSAccessProtocol/op-summarize.va';
export { op_summarize } from '../MSAccessProtocol/op-summarize.va';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION summarize */
/**
 * @summary summarize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarize ABSTRACT-OPERATION ::= {
 *   ARGUMENT  SummarizeArgument
 *   RESULT    SummarizeResult
 *   ERRORS
 *     {attribute-error | invalid-parameters-error | range-error | security-error
 *       | service-error, ... -- 1994 extension additions --, entry-class-error |
 *       ms-extension-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-summarize
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<SummarizeArgument, SummarizeResult>}
 * @implements {ABSTRACT_OPERATION<SummarizeArgument, SummarizeResult>}
 */
export const summarize: ABSTRACT_OPERATION<
    SummarizeArgument,
    SummarizeResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_SummarizeArgument,
        '&ResultType': _decode_SummarizeResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_SummarizeArgument,
        '&ResultType': _encode_SummarizeResult,
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
    '&operationCode': op_summarize /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION summarize */

/* eslint-enable */
