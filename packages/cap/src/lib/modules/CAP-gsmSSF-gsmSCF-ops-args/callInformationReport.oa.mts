import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CallInformationReportArg, _decode_CallInformationReportArg, _encode_CallInformationReportArg } from "../CAP-gsmSSF-gsmSCF-ops-args/CallInformationReportArg.ta.mjs";
import { opcode_callInformationReport } from "../CAP-operationcodes/opcode-callInformationReport.va.mjs";

/**
 * @summary callInformationReport
 * @description
 *
 * gsmSSF sends specific call information for a single call party, as requested
 * by a prior CallInformationRequest. Sent at the end of that party's connection
 * (release, abandon, busy/not reachable, no-answer, route select failure, or
 * gsmSCF ReleaseCall). gsmSSF → gsmSCF. Unconfirmed (`RETURN RESULT FALSE`,
 * `ALWAYS RESPONDS FALSE`). Local opcode 44. Timer `Tcirp` (short: 1 s–10 s;
 * operator-defined within range). Class 4: operation-related error handling is
 * not applicable. (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and 11.6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * callInformationReport {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	CallInformationReportArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ALWAYS RESPONDS	FALSE
 * 	CODE		opcode-callInformationReport}
 * ```
 *
 * @constant
 * @type {OPERATION<CallInformationReportArg>}
 * @implements {OPERATION<CallInformationReportArg>}
 */
export
const callInformationReport: OPERATION<CallInformationReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallInformationReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallInformationReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_callInformationReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
