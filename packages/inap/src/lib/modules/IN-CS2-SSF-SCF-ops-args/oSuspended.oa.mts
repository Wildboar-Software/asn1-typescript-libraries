/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OSuspendedArg, _decode_OSuspendedArg, _encode_OSuspendedArg } from "../IN-CS2-SSF-SCF-ops-args/OSuspendedArg.ta.mjs";
// export { OSuspendedArg, _decode_OSuspendedArg, _encode_OSuspendedArg } from "../IN-CS2-SSF-SCF-ops-args/OSuspendedArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS2-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS2-errortypes/missingCustomerRecord.oa.mjs";
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
import { opcode_oSuspended } from "../IN-CS2-operationcodes/opcode-oSuspended.va.mjs";
// export { opcode_oSuspended } from "../IN-CS2-operationcodes/opcode-oSuspended.va.mjs";


/**
 * @summary oSuspended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oSuspended OPERATION ::= {
 *   ARGUMENT       OSuspendedArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       unknownLegID}
 *   CODE           opcode-oSuspended
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<OSuspendedArg>}
 * @implements {OPERATION<OSuspendedArg>}
 */
export
const oSuspended: OPERATION<OSuspendedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OSuspendedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OSuspendedArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_oSuspended /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
