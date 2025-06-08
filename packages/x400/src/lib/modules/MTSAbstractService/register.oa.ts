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
    RegisterArgument,
    _decode_RegisterArgument,
    _encode_RegisterArgument,
} from '../MTSAbstractService/RegisterArgument.ta';
export {
    RegisterArgument,
    _decode_RegisterArgument,
    _encode_RegisterArgument,
} from '../MTSAbstractService/RegisterArgument.ta';
import {
    RegisterResult,
    _decode_RegisterResult,
    _encode_RegisterResult,
} from '../MTSAbstractService/RegisterResult.ta';
export {
    RegisterResult,
    _decode_RegisterResult,
    _encode_RegisterResult,
} from '../MTSAbstractService/RegisterResult.ta';
import { register_rejected } from '../MTSAbstractService/register-rejected.oa';
export { register_rejected } from '../MTSAbstractService/register-rejected.oa';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
import { operation_refused } from '../MTSAbstractService/operation-refused.oa';
export { operation_refused } from '../MTSAbstractService/operation-refused.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
import { op_register } from '../MTSAccessProtocol/op-register.va';
export { op_register } from '../MTSAccessProtocol/op-register.va';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION register */
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
/* END_OF_SYMBOL_DEFINITION register */

/* eslint-enable */
