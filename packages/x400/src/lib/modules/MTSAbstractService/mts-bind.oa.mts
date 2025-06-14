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
    MTSBindArgument,
    _decode_MTSBindArgument,
    _encode_MTSBindArgument,
} from '../MTSAbstractService/MTSBindArgument.ta.mjs';
import {
    MTSBindResult,
    _decode_MTSBindResult,
    _encode_MTSBindResult,
} from '../MTSAbstractService/MTSBindResult.ta.mjs';
import { mts_bind_error } from '../MTSAbstractService/mts-bind-error.oa.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mts_bind */
/**
 * @summary mts_bind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-bind ABSTRACT-OPERATION ::= {
 *   ARGUMENT  MTSBindArgument
 *   RESULT    MTSBindResult
 *   ERRORS    {mts-bind-error}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<MTSBindArgument, MTSBindResult>}
 * @implements {ABSTRACT_OPERATION<MTSBindArgument, MTSBindResult>}
 */
export const mts_bind: ABSTRACT_OPERATION<MTSBindArgument, MTSBindResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_MTSBindArgument,
        '&ResultType': _decode_MTSBindResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_MTSBindArgument,
        '&ResultType': _encode_MTSBindResult,
    },
    '&Errors': [mts_bind_error] /* OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_bind */

/* eslint-enable */
