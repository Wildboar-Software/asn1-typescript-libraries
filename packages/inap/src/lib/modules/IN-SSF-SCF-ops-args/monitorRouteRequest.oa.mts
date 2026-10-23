/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MonitorRouteRequestArg, _decode_MonitorRouteRequestArg, _encode_MonitorRouteRequestArg } from "../IN-SSF-SCF-ops-args/MonitorRouteRequestArg.ta.mjs";
// export { MonitorRouteRequestArg, _decode_MonitorRouteRequestArg, _encode_MonitorRouteRequestArg } from "../IN-SSF-SCF-ops-args/MonitorRouteRequestArg.ta.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { opcode_monitorRouteRequest } from "../IN-operationcodes/opcode-monitorRouteRequest.va.mjs";
// export { opcode_monitorRouteRequest } from "../IN-operationcodes/opcode-monitorRouteRequest.va.mjs";


/**
 * @summary monitorRouteRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorRouteRequest OPERATION ::= {
 *   ARGUMENT       MonitorRouteRequestArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedParameter}
 *   CODE           opcode-monitorRouteRequest
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorRouteRequestArg>}
 * @implements {OPERATION<MonitorRouteRequestArg>}
 */
export
const monitorRouteRequest: OPERATION<MonitorRouteRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorRouteRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorRouteRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_monitorRouteRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
