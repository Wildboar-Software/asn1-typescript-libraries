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
    MTABindArgument,
    _decode_MTABindArgument,
    _encode_MTABindArgument,
} from '../MTAAbstractService/MTABindArgument.ta.mjs';
import {
    MTABindResult,
    _decode_MTABindResult,
    _encode_MTABindResult,
} from '../MTAAbstractService/MTABindResult.ta.mjs';
import { mta_bind_error } from '../MTAAbstractService/mta-bind-error.oa.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary mta_bind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind ABSTRACT-OPERATION ::= {
 *   ARGUMENT  MTABindArgument
 *   RESULT    MTABindResult
 *   ERRORS    {mta-bind-error}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<MTABindArgument, MTABindResult>}
 * @implements {ABSTRACT_OPERATION<MTABindArgument, MTABindResult>}
 */
export const mta_bind: ABSTRACT_OPERATION<MTABindArgument, MTABindResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_MTABindArgument,
        '&ResultType': _decode_MTABindResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_MTABindArgument,
        '&ResultType': _encode_MTABindResult,
    },
    '&Errors': [mta_bind_error] /* OBJECT_FIELD_SETTING */,
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
