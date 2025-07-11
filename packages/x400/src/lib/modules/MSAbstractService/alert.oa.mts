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
    AlertArgument,
    _decode_AlertArgument,
    _encode_AlertArgument,
} from '../MSAbstractService/AlertArgument.ta.mjs';
import {
    AlertResult,
    _decode_AlertResult,
    _encode_AlertResult,
} from '../MSAbstractService/AlertResult.ta.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_alert } from '../MSAccessProtocol/op-alert.va.mjs';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary alert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alert ABSTRACT-OPERATION ::= {
 *   ARGUMENT  AlertArgument
 *   RESULT    AlertResult
 *   ERRORS    {security-error}
 *   LINKED    {operationObject1, ...}
 *   CODE      op-alert
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<AlertArgument, AlertResult>}
 * @implements {ABSTRACT_OPERATION<AlertArgument, AlertResult>}
 */
export const alert: ABSTRACT_OPERATION<AlertArgument, AlertResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_AlertArgument,
        '&ResultType': _decode_AlertResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_AlertArgument,
        '&ResultType': _encode_AlertResult,
    },
    '&Errors': [security_error] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_alert /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
