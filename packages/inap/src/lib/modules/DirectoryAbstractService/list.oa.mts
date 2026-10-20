/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ListArgument, _decode_ListArgument, _encode_ListArgument } from "../DirectoryAbstractService/ListArgument.ta.mjs";
// export { ListArgument, _decode_ListArgument, _encode_ListArgument } from "../DirectoryAbstractService/ListArgument.ta.mjs";
import { ListResult, _decode_ListResult, _encode_ListResult } from "../DirectoryAbstractService/ListResult.ta.mjs";
// export { ListResult, _decode_ListResult, _encode_ListResult } from "../DirectoryAbstractService/ListResult.ta.mjs";
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
import { id_opcode_list } from "../DirectoryAccessProtocol/id-opcode-list.va.mjs";
// export { id_opcode_list } from "../DirectoryAccessProtocol/id-opcode-list.va.mjs";


/**
 * @summary list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * list OPERATION ::= {
 *   ARGUMENT  ListArgument
 *   RESULT    ListResult
 *   ERRORS    {nameError | serviceError | referral | abandoned | securityError}
 *   CODE      id-opcode-list
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ListArgument, ListResult>}
 * @implements {OPERATION<ListArgument, ListResult>}
 */
export
const list: OPERATION<ListArgument, ListResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ListArgument,
        "&ResultType": _decode_ListResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ListArgument,
        "&ResultType": _encode_ListResult,
    },
    "&Errors": [ nameError, serviceError, referral, abandoned, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_list /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
