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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.js';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.js';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
import {
    ChangeCredentialsArgument,
    _decode_ChangeCredentialsArgument,
    _encode_ChangeCredentialsArgument,
} from '../MTSAbstractService/ChangeCredentialsArgument.ta.js';
export {
    ChangeCredentialsArgument,
    _decode_ChangeCredentialsArgument,
    _encode_ChangeCredentialsArgument,
} from '../MTSAbstractService/ChangeCredentialsArgument.ta.js';
import { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa.js';
export { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa.js';
import { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa.js';
export { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa.js';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.js';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.js';
import { security_error } from '../MTSAbstractService/security-error.oa.js';
export { security_error } from '../MTSAbstractService/security-error.oa.js';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
import { op_change_credentials } from '../MTSAccessProtocol/op-change-credentials.va.js';
export { op_change_credentials } from '../MTSAccessProtocol/op-change-credentials.va.js';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.js';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.js';

/* START_OF_SYMBOL_DEFINITION change_credentials */
/**
 * @summary change_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * change-credentials ABSTRACT-OPERATION ::= {
 *   ARGUMENT         ChangeCredentialsArgument
 *   RESULT           NULL
 *   ERRORS
 *     {new-credentials-unacceptable | old-credentials-incorrectly-specified |
 *       remote-bind-error | security-error}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {5}
 *   CODE             op-change-credentials
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<ChangeCredentialsArgument, NULL>}
 * @implements {ABSTRACT_OPERATION<ChangeCredentialsArgument, NULL>}
 */
export const change_credentials: ABSTRACT_OPERATION<
    ChangeCredentialsArgument,
    NULL
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_ChangeCredentialsArgument,
        '&ResultType': $._decodeNull,
    },
    encoderFor: {
        '&ArgumentType': _encode_ChangeCredentialsArgument,
        '&ResultType': $._encodeNull,
    },
    '&Errors': [
        new_credentials_unacceptable,
        old_credentials_incorrectly_specified,
        remote_bind_error,
        security_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_change_credentials /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION change_credentials */

/* eslint-enable */
