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
    MSBindArgument,
    _decode_MSBindArgument,
    _encode_MSBindArgument,
} from '../MSAbstractService/MSBindArgument.ta.mjs';
import {
    MSBindResult,
    _decode_MSBindResult,
    _encode_MSBindResult,
} from '../MSAbstractService/MSBindResult.ta.mjs';
import { ms_bind_error } from '../MSAbstractService/ms-bind-error.oa.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary ms_bind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind ABSTRACT-OPERATION ::= {
 *   ARGUMENT  MSBindArgument
 *   RESULT    MSBindResult
 *   ERRORS    {ms-bind-error}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<MSBindArgument, MSBindResult>}
 * @implements {ABSTRACT_OPERATION<MSBindArgument, MSBindResult>}
 */
export const ms_bind: ABSTRACT_OPERATION<MSBindArgument, MSBindResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_MSBindArgument,
        '&ResultType': _decode_MSBindResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_MSBindArgument,
        '&ResultType': _encode_MSBindResult,
    },
    '&Errors': [ms_bind_error] /* OBJECT_FIELD_SETTING */,
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
