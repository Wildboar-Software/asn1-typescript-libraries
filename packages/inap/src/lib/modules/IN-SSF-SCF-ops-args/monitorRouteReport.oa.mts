/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MonitorRouteReportArg, _decode_MonitorRouteReportArg, _encode_MonitorRouteReportArg } from "../IN-SSF-SCF-ops-args/MonitorRouteReportArg.ta.mjs";
// export { MonitorRouteReportArg, _decode_MonitorRouteReportArg, _encode_MonitorRouteReportArg } from "../IN-SSF-SCF-ops-args/MonitorRouteReportArg.ta.mjs";
import { opcode_monitorRouteReport } from "../IN-operationcodes/opcode-monitorRouteReport.va.mjs";
// export { opcode_monitorRouteReport } from "../IN-operationcodes/opcode-monitorRouteReport.va.mjs";


/**
 * @summary monitorRouteReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorRouteReport OPERATION ::= {
 *   ARGUMENT         MonitorRouteReportArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-monitorRouteReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorRouteReportArg>}
 * @implements {OPERATION<MonitorRouteReportArg>}
 */
export
const monitorRouteReport: OPERATION<MonitorRouteReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorRouteReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorRouteReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_monitorRouteReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
