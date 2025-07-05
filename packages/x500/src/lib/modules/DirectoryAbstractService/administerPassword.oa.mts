/* eslint-disable */
import { id_opcode_administerPassword } from "../CommonProtocolSpecification/id-opcode-administerPassword.va.mjs";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    AdministerPasswordArgument,
    _decode_AdministerPasswordArgument,
    _encode_AdministerPasswordArgument,
} from "../DirectoryAbstractService/AdministerPasswordArgument.ta.mjs";
import {
    AdministerPasswordResult,
    _decode_AdministerPasswordResult,
    _encode_AdministerPasswordResult,
} from "../DirectoryAbstractService/AdministerPasswordResult.ta.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
/**
 * @summary administerPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administerPassword OPERATION ::= {
 *   ARGUMENT  AdministerPasswordArgument
 *   RESULT    AdministerPasswordResult
 *   ERRORS    {securityError |
 *              updateError}
 *   CODE      id-opcode-administerPassword }
 * ```
 *
 * @constant
 * @type {OPERATION<AdministerPasswordArgument, AdministerPasswordResult>}
 * @implements {OPERATION<AdministerPasswordArgument, AdministerPasswordResult>}
 */
export const administerPassword: OPERATION<
    AdministerPasswordArgument,
    AdministerPasswordResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AdministerPasswordArgument,
        "&ResultType": _decode_AdministerPasswordResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AdministerPasswordArgument,
        "&ResultType": _encode_AdministerPasswordResult,
    },
    "&Errors": [securityError, updateError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_administerPassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
