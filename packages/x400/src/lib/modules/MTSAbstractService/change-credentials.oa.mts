/* eslint-disable */
import {
    NULL,
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
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    ChangeCredentialsArgument,
    _decode_ChangeCredentialsArgument,
    _encode_ChangeCredentialsArgument,
} from '../MTSAbstractService/ChangeCredentialsArgument.ta.mjs';
import { new_credentials_unacceptable } from '../MTSAbstractService/new-credentials-unacceptable.oa.mjs';
import { old_credentials_incorrectly_specified } from '../MTSAbstractService/old-credentials-incorrectly-specified.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_change_credentials } from '../MTSAccessProtocol/op-change-credentials.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
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

/* eslint-enable */
