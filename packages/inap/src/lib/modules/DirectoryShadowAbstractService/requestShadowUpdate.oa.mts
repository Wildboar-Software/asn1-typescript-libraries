/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { RequestShadowUpdateArgument, _decode_RequestShadowUpdateArgument, _encode_RequestShadowUpdateArgument } from "../DirectoryShadowAbstractService/RequestShadowUpdateArgument.ta.mjs";
// export { RequestShadowUpdateArgument, _decode_RequestShadowUpdateArgument, _encode_RequestShadowUpdateArgument } from "../DirectoryShadowAbstractService/RequestShadowUpdateArgument.ta.mjs";
import { RequestShadowUpdateResult, _decode_RequestShadowUpdateResult, _encode_RequestShadowUpdateResult } from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta.mjs";
// export { RequestShadowUpdateResult, _decode_RequestShadowUpdateResult, _encode_RequestShadowUpdateResult } from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta.mjs";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
// export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
import { id_opcode_requestShadowUpdate } from "../DirectoryInformationShadowProtocol/id-opcode-requestShadowUpdate.va.mjs";
// export { id_opcode_requestShadowUpdate } from "../DirectoryInformationShadowProtocol/id-opcode-requestShadowUpdate.va.mjs";


/**
 * @summary requestShadowUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestShadowUpdate OPERATION ::= {
 *   ARGUMENT  RequestShadowUpdateArgument
 *   RESULT    RequestShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-requestShadowUpdate
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<RequestShadowUpdateArgument, RequestShadowUpdateResult>}
 * @implements {OPERATION<RequestShadowUpdateArgument, RequestShadowUpdateResult>}
 */
export
const requestShadowUpdate: OPERATION<RequestShadowUpdateArgument, RequestShadowUpdateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestShadowUpdateArgument,
        "&ResultType": _decode_RequestShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestShadowUpdateArgument,
        "&ResultType": _encode_RequestShadowUpdateResult,
    },
    "&Errors": [ shadowError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_requestShadowUpdate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
