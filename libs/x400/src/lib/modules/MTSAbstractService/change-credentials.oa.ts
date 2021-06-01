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
    ChangeCredentialsArgument,
    _decode_ChangeCredentialsArgument,
    _encode_ChangeCredentialsArgument,
} from '../MTSAbstractService/ChangeCredentialsArgument.ta';
export {
    ChangeCredentialsArgument,
    _decode_ChangeCredentialsArgument,
    _encode_ChangeCredentialsArgument,
} from '../MTSAbstractService/ChangeCredentialsArgument.ta';
import { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa';
export { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa';
import { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa';
export { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
import { op_change_credentials } from '../MTSAccessProtocol/op-change-credentials.va';
export { op_change_credentials } from '../MTSAccessProtocol/op-change-credentials.va';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';

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
