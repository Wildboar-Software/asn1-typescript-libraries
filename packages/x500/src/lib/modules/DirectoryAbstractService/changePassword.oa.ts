/* eslint-disable */
import { id_opcode_changePassword } from "../CommonProtocolSpecification/id-opcode-changePassword.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    ChangePasswordArgument,
    _decode_ChangePasswordArgument,
    _encode_ChangePasswordArgument,
} from "../DirectoryAbstractService/ChangePasswordArgument.ta.js";
import {
    ChangePasswordResult,
    _decode_ChangePasswordResult,
    _encode_ChangePasswordResult,
} from "../DirectoryAbstractService/ChangePasswordResult.ta.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { updateError } from "../DirectoryAbstractService/updateError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_changePassword } from "../CommonProtocolSpecification/id-opcode-changePassword.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    ChangePasswordArgument,
    _decode_ChangePasswordArgument,
    _encode_ChangePasswordArgument,
} from "../DirectoryAbstractService/ChangePasswordArgument.ta.js";
export {
    ChangePasswordResult,
    _decode_ChangePasswordResult,
    _encode_ChangePasswordResult,
} from "../DirectoryAbstractService/ChangePasswordResult.ta.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { updateError } from "../DirectoryAbstractService/updateError.oa.js";

/* START_OF_SYMBOL_DEFINITION changePassword */
/**
 * @summary changePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * changePassword OPERATION ::= {
 *   ARGUMENT  ChangePasswordArgument
 *   RESULT    ChangePasswordResult
 *   ERRORS    {securityError |
 *              updateError }
 *   CODE      id-opcode-changePassword }
 * ```
 *
 * @constant
 * @type {OPERATION<ChangePasswordArgument, ChangePasswordResult>}
 * @implements {OPERATION<ChangePasswordArgument, ChangePasswordResult>}
 */
export const changePassword: OPERATION<
    ChangePasswordArgument,
    ChangePasswordResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChangePasswordArgument,
        "&ResultType": _decode_ChangePasswordResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChangePasswordArgument,
        "&ResultType": _encode_ChangePasswordResult,
    },
    "&Errors": [securityError, updateError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_changePassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION changePassword */

/* eslint-enable */
