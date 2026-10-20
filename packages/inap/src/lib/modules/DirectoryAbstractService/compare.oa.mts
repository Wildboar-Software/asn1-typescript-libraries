/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CompareArgument, _decode_CompareArgument, _encode_CompareArgument } from "../DirectoryAbstractService/CompareArgument.ta.mjs";
// export { CompareArgument, _decode_CompareArgument, _encode_CompareArgument } from "../DirectoryAbstractService/CompareArgument.ta.mjs";
import { CompareResult, _decode_CompareResult, _encode_CompareResult } from "../DirectoryAbstractService/CompareResult.ta.mjs";
// export { CompareResult, _decode_CompareResult, _encode_CompareResult } from "../DirectoryAbstractService/CompareResult.ta.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { id_opcode_compare } from "../DirectoryAccessProtocol/id-opcode-compare.va.mjs";
// export { id_opcode_compare } from "../DirectoryAccessProtocol/id-opcode-compare.va.mjs";


/**
 * @summary compare
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * compare OPERATION ::= {
 *   ARGUMENT  CompareArgument
 *   RESULT    CompareResult
 *   ERRORS
 *     {attributeError | nameError | serviceError | referral | abandoned |
 *       securityError}
 *   CODE      id-opcode-compare
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CompareArgument, CompareResult>}
 * @implements {OPERATION<CompareArgument, CompareResult>}
 */
export
const compare: OPERATION<CompareArgument, CompareResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CompareArgument,
        "&ResultType": _decode_CompareResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CompareArgument,
        "&ResultType": _encode_CompareResult,
    },
    "&Errors": [ attributeError, nameError, serviceError, referral, abandoned, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_compare /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
