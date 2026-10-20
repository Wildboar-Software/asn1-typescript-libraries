import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IN_RequestShadowUpdateArgument, _decode_IN_RequestShadowUpdateArgument, _encode_IN_RequestShadowUpdateArgument } from "../IN-SDF-SDF-Operations/IN-RequestShadowUpdateArgument.ta.mjs";
// export { IN_RequestShadowUpdateArgument, _decode_IN_RequestShadowUpdateArgument, _encode_IN_RequestShadowUpdateArgument } from "../IN-SDF-SDF-Operations/IN-RequestShadowUpdateArgument.ta.mjs";
import { IN_RequestShadowUpdateResult, _decode_IN_RequestShadowUpdateResult, _encode_IN_RequestShadowUpdateResult } from "../IN-SDF-SDF-Operations/IN-RequestShadowUpdateResult.ta.mjs";
// export { IN_RequestShadowUpdateResult, _decode_IN_RequestShadowUpdateResult, _encode_IN_RequestShadowUpdateResult } from "../IN-SDF-SDF-Operations/IN-RequestShadowUpdateResult.ta.mjs";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
// export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
import { id_opcode_requestShadowUpdate } from "../DirectoryInformationShadowProtocol/id-opcode-requestShadowUpdate.va.mjs";
// export { id_opcode_requestShadowUpdate } from "../DirectoryInformationShadowProtocol/id-opcode-requestShadowUpdate.va.mjs";


/**
 * @summary in_RequestShadowUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-RequestShadowUpdate OPERATION ::= {
 *   ARGUMENT  IN-RequestShadowUpdateArgument
 *   RESULT    IN-RequestShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-requestShadowUpdate
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_RequestShadowUpdateArgument, IN_RequestShadowUpdateResult>}
 * @implements {OPERATION<IN_RequestShadowUpdateArgument, IN_RequestShadowUpdateResult>}
 */
export
const in_RequestShadowUpdate: OPERATION<IN_RequestShadowUpdateArgument, IN_RequestShadowUpdateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_RequestShadowUpdateArgument,
        "&ResultType": _decode_IN_RequestShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_RequestShadowUpdateArgument,
        "&ResultType": _encode_IN_RequestShadowUpdateResult,
    },
    "&Errors": [ shadowError, ] as unknown as ERROR[] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_requestShadowUpdate as unknown as Code /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
