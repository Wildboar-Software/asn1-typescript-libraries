/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MoveCallSegmentsArg, _decode_MoveCallSegmentsArg, _encode_MoveCallSegmentsArg } from "../IN-CS2-SSF-SCF-ops-args/MoveCallSegmentsArg.ta.mjs";
// export { MoveCallSegmentsArg, _decode_MoveCallSegmentsArg, _encode_MoveCallSegmentsArg } from "../IN-CS2-SSF-SCF-ops-args/MoveCallSegmentsArg.ta.mjs";
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
import { unknownLegID } from "../IN-CS2-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS2-errortypes/unknownLegID.oa.mjs";
import { opcode_moveCallSegments } from "../IN-CS2-operationcodes/opcode-moveCallSegments.va.mjs";
// export { opcode_moveCallSegments } from "../IN-CS2-operationcodes/opcode-moveCallSegments.va.mjs";


/**
 * @summary moveCallSegments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * moveCallSegments OPERATION ::= {
 *   ARGUMENT       MoveCallSegmentsArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       unknownLegID}
 *   CODE           opcode-moveCallSegments
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MoveCallSegmentsArg>}
 * @implements {OPERATION<MoveCallSegmentsArg>}
 */
export
const moveCallSegments: OPERATION<MoveCallSegmentsArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MoveCallSegmentsArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MoveCallSegmentsArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_moveCallSegments /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
