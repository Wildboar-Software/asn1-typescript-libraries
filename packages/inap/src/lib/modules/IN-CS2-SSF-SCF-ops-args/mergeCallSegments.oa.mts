/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MergeCallSegmentsArg, _decode_MergeCallSegmentsArg, _encode_MergeCallSegmentsArg } from "../IN-CS2-SSF-SCF-ops-args/MergeCallSegmentsArg.ta.mjs";
// export { MergeCallSegmentsArg, _decode_MergeCallSegmentsArg, _encode_MergeCallSegmentsArg } from "../IN-CS2-SSF-SCF-ops-args/MergeCallSegmentsArg.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { opcode_mergeCallSegments } from "../IN-CS2-operationcodes/opcode-mergeCallSegments.va.mjs";
// export { opcode_mergeCallSegments } from "../IN-CS2-operationcodes/opcode-mergeCallSegments.va.mjs";


/**
 * @summary mergeCallSegments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mergeCallSegments OPERATION ::= {
 *   ARGUMENT       MergeCallSegmentsArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           opcode-mergeCallSegments
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MergeCallSegmentsArg>}
 * @implements {OPERATION<MergeCallSegmentsArg>}
 */
export
const mergeCallSegments: OPERATION<MergeCallSegmentsArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MergeCallSegmentsArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MergeCallSegmentsArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_mergeCallSegments /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
