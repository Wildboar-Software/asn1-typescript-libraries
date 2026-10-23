/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { FacilitySelectedAndAvailableArg, _decode_FacilitySelectedAndAvailableArg, _encode_FacilitySelectedAndAvailableArg } from "../IN-SSF-SCF-ops-args/FacilitySelectedAndAvailableArg.ta.mjs";
// export { FacilitySelectedAndAvailableArg, _decode_FacilitySelectedAndAvailableArg, _encode_FacilitySelectedAndAvailableArg } from "../IN-SSF-SCF-ops-args/FacilitySelectedAndAvailableArg.ta.mjs";
import { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { opcode_facilitySelectedAndAvailable } from "../IN-operationcodes/opcode-facilitySelectedAndAvailable.va.mjs";
// export { opcode_facilitySelectedAndAvailable } from "../IN-operationcodes/opcode-facilitySelectedAndAvailable.va.mjs";


/**
 * @summary facilitySelectedAndAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * facilitySelectedAndAvailable OPERATION ::= {
 *   ARGUMENT         FacilitySelectedAndAvailableArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-facilitySelectedAndAvailable
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<FacilitySelectedAndAvailableArg>}
 * @implements {OPERATION<FacilitySelectedAndAvailableArg>}
 */
export
const facilitySelectedAndAvailable: OPERATION<FacilitySelectedAndAvailableArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FacilitySelectedAndAvailableArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FacilitySelectedAndAvailableArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_facilitySelectedAndAvailable /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
