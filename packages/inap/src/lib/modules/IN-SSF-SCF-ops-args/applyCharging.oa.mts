/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ApplyChargingArg, _decode_ApplyChargingArg, _encode_ApplyChargingArg } from "../IN-SSF-SCF-ops-args/ApplyChargingArg.ta.mjs";
// export { ApplyChargingArg, _decode_ApplyChargingArg, _encode_ApplyChargingArg } from "../IN-SSF-SCF-ops-args/ApplyChargingArg.ta.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { unknownLegID } from "../IN-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-errortypes/unknownLegID.oa.mjs";
import { opcode_applyCharging } from "../IN-operationcodes/opcode-applyCharging.va.mjs";
// export { opcode_applyCharging } from "../IN-operationcodes/opcode-applyCharging.va.mjs";


/**
 * @summary applyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applyCharging OPERATION ::= {
 *   ARGUMENT         ApplyChargingArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | unexpectedComponentSequence | unexpectedParameter |
 *       unexpectedDataValue | parameterOutOfRange | systemFailure | taskRefused |
 *       unknownLegID}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-applyCharging
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ApplyChargingArg>}
 * @implements {OPERATION<ApplyChargingArg>}
 */
export
const applyCharging: OPERATION<ApplyChargingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ApplyChargingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ApplyChargingArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, parameterOutOfRange, systemFailure, taskRefused, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_applyCharging /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
