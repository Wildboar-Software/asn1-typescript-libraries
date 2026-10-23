import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IN_CoordinateShadowUpdateArgument, _decode_IN_CoordinateShadowUpdateArgument, _encode_IN_CoordinateShadowUpdateArgument } from "../IN-SDF-SDF-Operations/IN-CoordinateShadowUpdateArgument.ta.mjs";
// export { IN_CoordinateShadowUpdateArgument, _decode_IN_CoordinateShadowUpdateArgument, _encode_IN_CoordinateShadowUpdateArgument } from "../IN-SDF-SDF-Operations/IN-CoordinateShadowUpdateArgument.ta.mjs";
import { IN_CoordinateShadowUpdateResult, _decode_IN_CoordinateShadowUpdateResult, _encode_IN_CoordinateShadowUpdateResult } from "../IN-SDF-SDF-Operations/IN-CoordinateShadowUpdateResult.ta.mjs";
// export { IN_CoordinateShadowUpdateResult, _decode_IN_CoordinateShadowUpdateResult, _encode_IN_CoordinateShadowUpdateResult } from "../IN-SDF-SDF-Operations/IN-CoordinateShadowUpdateResult.ta.mjs";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
// export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
import { id_opcode_coordinateShadowUpdate } from "../DirectoryInformationShadowProtocol/id-opcode-coordinateShadowUpdate.va.mjs";
// export { id_opcode_coordinateShadowUpdate } from "../DirectoryInformationShadowProtocol/id-opcode-coordinateShadowUpdate.va.mjs";


/**
 * @summary in_CoordinateShadowUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-CoordinateShadowUpdate OPERATION ::= {
 *   ARGUMENT  IN-CoordinateShadowUpdateArgument
 *   RESULT    IN-CoordinateShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-coordinateShadowUpdate
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_CoordinateShadowUpdateArgument, IN_CoordinateShadowUpdateResult>}
 * @implements {OPERATION<IN_CoordinateShadowUpdateArgument, IN_CoordinateShadowUpdateResult>}
 */
export
const in_CoordinateShadowUpdate: OPERATION<IN_CoordinateShadowUpdateArgument, IN_CoordinateShadowUpdateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_CoordinateShadowUpdateArgument,
        "&ResultType": _decode_IN_CoordinateShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_CoordinateShadowUpdateArgument,
        "&ResultType": _encode_IN_CoordinateShadowUpdateResult,
    },
    "&Errors": [ shadowError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_coordinateShadowUpdate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
