/* eslint-disable */
import { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta.mjs";
import {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
export { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta.mjs";
export {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta.mjs";
export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";

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
