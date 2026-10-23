/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SendFacilityInformationArg, _decode_SendFacilityInformationArg, _encode_SendFacilityInformationArg } from "../IN-CS3-SSF-SCF-ops-args/SendFacilityInformationArg.ta.mjs";
// export { SendFacilityInformationArg, _decode_SendFacilityInformationArg, _encode_SendFacilityInformationArg } from "../IN-CS3-SSF-SCF-ops-args/SendFacilityInformationArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { unknownLegID } from "../IN-CS3-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS3-errortypes/unknownLegID.oa.mjs";
import { opcode_sendFacilityInformation } from "../IN-CS3-operationcodes/opcode-sendFacilityInformation.va.mjs";
// export { opcode_sendFacilityInformation } from "../IN-CS3-operationcodes/opcode-sendFacilityInformation.va.mjs";


/**
 * @summary sendFacilityInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendFacilityInformation OPERATION ::= {
 *   ARGUMENT         SendFacilityInformationArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | unexpectedComponentSequence | unexpectedParameter |
 *       unexpectedDataValue | systemFailure | taskRefused | unknownLegID}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-sendFacilityInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendFacilityInformationArg>}
 * @implements {OPERATION<SendFacilityInformationArg>}
 */
export
const sendFacilityInformation: OPERATION<SendFacilityInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendFacilityInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendFacilityInformationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, systemFailure, taskRefused, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_sendFacilityInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
