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
    RegisterArgument,
    _decode_RegisterArgument,
    _encode_RegisterArgument,
} from '../MTSAbstractService/RegisterArgument.ta.mjs';
import {
    RegisterResult,
    _decode_RegisterResult,
    _encode_RegisterResult,
} from '../MTSAbstractService/RegisterResult.ta.mjs';
import { register_rejected } from '../MTSAbstractService/register-rejected.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { operation_refused } from '../MTSAbstractService/operation-refused.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_register } from '../MTSAccessProtocol/op-register.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary register
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * register ABSTRACT-OPERATION ::= {
 *   ARGUMENT         RegisterArgument
 *   RESULT           RegisterResult
 *   ERRORS
 *     {register-rejected | remote-bind-error | operation-refused |
 *       security-error}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {5}
 *   CODE             op-register
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<RegisterArgument, RegisterResult>}
 * @implements {ABSTRACT_OPERATION<RegisterArgument, RegisterResult>}
 */
export const register: ABSTRACT_OPERATION<RegisterArgument, RegisterResult> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_RegisterArgument,
        '&ResultType': _decode_RegisterResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_RegisterArgument,
        '&ResultType': _encode_RegisterResult,
    },
    '&Errors': [
        register_rejected,
        remote_bind_error,
        operation_refused,
        security_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_register /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
