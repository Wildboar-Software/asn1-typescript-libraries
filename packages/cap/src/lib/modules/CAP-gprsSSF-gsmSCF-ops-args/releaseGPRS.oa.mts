import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReleaseGPRSArg, _decode_ReleaseGPRSArg, _encode_ReleaseGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ReleaseGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_releaseGPRS } from "../CAP-operationcodes/opcode-releaseGPRS.va.mjs";

/**
 * @summary releaseGPRS
 * @description
 *
 * Tears down an existing GPRS Session or PDP Context at any phase.
 * (3GPP TS 29.078 V19.0.0 clause 13.11).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2). Local opcode
 * 79. Timer Trg (Short; 1–20 s, operator-defined).
 *
 * Requires a control relationship; tearing down a PDP Context or
 * forcing detach requires an armed EDP-R for that entity. Sends
 * pending reports, releases resources, disarms EDPs. unknownPDPID
 * if PDPID unknown. (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.11).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * releaseGPRS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ReleaseGPRSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			taskRefused |
 * 			unknownPDPID}
 * 	CODE		opcode-releaseGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<ReleaseGPRSArg>}
 * @implements {OPERATION<ReleaseGPRSArg>}
 */
export
const releaseGPRS: OPERATION<ReleaseGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReleaseGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReleaseGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_releaseGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
