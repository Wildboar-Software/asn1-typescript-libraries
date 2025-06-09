/* eslint-disable */
import { id_opcode_administerPassword } from "../CommonProtocolSpecification/id-opcode-administerPassword.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    AdministerPasswordArgument,
    _decode_AdministerPasswordArgument,
    _encode_AdministerPasswordArgument,
} from "../DirectoryAbstractService/AdministerPasswordArgument.ta.js";
import {
    AdministerPasswordResult,
    _decode_AdministerPasswordResult,
    _encode_AdministerPasswordResult,
} from "../DirectoryAbstractService/AdministerPasswordResult.ta.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { updateError } from "../DirectoryAbstractService/updateError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_administerPassword } from "../CommonProtocolSpecification/id-opcode-administerPassword.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    AdministerPasswordArgument,
    _decode_AdministerPasswordArgument,
    _encode_AdministerPasswordArgument,
} from "../DirectoryAbstractService/AdministerPasswordArgument.ta.js";
export {
    AdministerPasswordResult,
    _decode_AdministerPasswordResult,
    _encode_AdministerPasswordResult,
} from "../DirectoryAbstractService/AdministerPasswordResult.ta.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { updateError } from "../DirectoryAbstractService/updateError.oa.js";

/* START_OF_SYMBOL_DEFINITION administerPassword */
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
/* END_OF_SYMBOL_DEFINITION administerPassword */

/* eslint-enable */
