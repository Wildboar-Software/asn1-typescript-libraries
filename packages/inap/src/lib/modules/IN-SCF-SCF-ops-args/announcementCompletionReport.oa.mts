/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AnnouncementCompletionReportArg, _decode_AnnouncementCompletionReportArg, _encode_AnnouncementCompletionReportArg } from "../IN-SCF-SCF-ops-args/AnnouncementCompletionReportArg.ta.mjs";
// export { AnnouncementCompletionReportArg, _decode_AnnouncementCompletionReportArg, _encode_AnnouncementCompletionReportArg } from "../IN-SCF-SCF-ops-args/AnnouncementCompletionReportArg.ta.mjs";
import { opcode_announcementCompletionReport } from "../IN-operationcodes/opcode-announcementCompletionReport.va.mjs";
// export { opcode_announcementCompletionReport } from "../IN-operationcodes/opcode-announcementCompletionReport.va.mjs";


/**
 * @summary announcementCompletionReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * announcementCompletionReport OPERATION ::= {
 *   ARGUMENT         AnnouncementCompletionReportArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-announcementCompletionReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AnnouncementCompletionReportArg>}
 * @implements {OPERATION<AnnouncementCompletionReportArg>}
 */
export
const announcementCompletionReport: OPERATION<AnnouncementCompletionReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AnnouncementCompletionReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AnnouncementCompletionReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_announcementCompletionReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
