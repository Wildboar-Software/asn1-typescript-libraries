/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ModifyDNArgument, _decode_ModifyDNArgument, _encode_ModifyDNArgument } from "../DirectoryAbstractService/ModifyDNArgument.ta.mjs";
// export { ModifyDNArgument, _decode_ModifyDNArgument, _encode_ModifyDNArgument } from "../DirectoryAbstractService/ModifyDNArgument.ta.mjs";
import { ModifyDNResult, _decode_ModifyDNResult, _encode_ModifyDNResult } from "../DirectoryAbstractService/ModifyDNResult.ta.mjs";
// export { ModifyDNResult, _decode_ModifyDNResult, _encode_ModifyDNResult } from "../DirectoryAbstractService/ModifyDNResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { id_opcode_modifyDN } from "../DirectoryAccessProtocol/id-opcode-modifyDN.va.mjs";
// export { id_opcode_modifyDN } from "../DirectoryAccessProtocol/id-opcode-modifyDN.va.mjs";


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
 *   ERRORS    {nameError | serviceError | referral | securityError | updateError}
 *   CODE      id-opcode-modifyDN
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ModifyDNArgument, ModifyDNResult>}
 * @implements {OPERATION<ModifyDNArgument, ModifyDNResult>}
 */
export
const modifyDN: OPERATION<ModifyDNArgument, ModifyDNResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyDNArgument,
        "&ResultType": _decode_ModifyDNResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyDNArgument,
        "&ResultType": _encode_ModifyDNResult,
    },
    "&Errors": [ nameError, serviceError, referral, securityError, updateError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyDN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
