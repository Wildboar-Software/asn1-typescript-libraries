/* eslint-disable */
import { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta.js";
import {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta.js";
import { nameError } from "../DirectoryAbstractService/nameError.oa.js";
import { referral } from "../DirectoryAbstractService/referral.oa.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
import { updateError } from "../DirectoryAbstractService/updateError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta.js";
export {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export { updateError } from "../DirectoryAbstractService/updateError.oa.js";

/* START_OF_SYMBOL_DEFINITION modifyDN */
/**
 * @summary modifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyDN OPERATION ::= {
 *   ARGUMENT  ModifyDNArgument
 *   RESULT    ModifyDNResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-modifyDN }
 * ```
 *
 * @constant
 * @type {OPERATION<ModifyDNArgument, ModifyDNResult>}
 * @implements {OPERATION<ModifyDNArgument, ModifyDNResult>}
 */
export const modifyDN: OPERATION<ModifyDNArgument, ModifyDNResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyDNArgument,
        "&ResultType": _decode_ModifyDNResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyDNArgument,
        "&ResultType": _encode_ModifyDNResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyDN /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modifyDN */

/* eslint-enable */
