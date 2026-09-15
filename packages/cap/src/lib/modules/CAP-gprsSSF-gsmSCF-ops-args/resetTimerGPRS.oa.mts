/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ResetTimerGPRSArg, _decode_ResetTimerGPRSArg, _encode_ResetTimerGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ResetTimerGPRSArg.ta.mjs";
// export { ResetTimerGPRSArg, _decode_ResetTimerGPRSArg, _encode_ResetTimerGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ResetTimerGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
// export { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_resetTimerGPRS } from "../CAP-operationcodes/opcode-resetTimerGPRS.va.mjs";
// export { opcode_resetTimerGPRS } from "../CAP-operationcodes/opcode-resetTimerGPRS.va.mjs";


/**
 * @summary resetTimerGPRS
 * @description
 *
 * Refreshes the Tssf application timer so it does not time out at
 * the gprsSSF. (3GPP TS 29.078 V19.0.0 clause 13.13).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2). Local opcode
 * 82. Timer Trtg (Short; 1–20 s, operator-defined).
 *
 * Valid while session or PDP Context processing is suspended at a
 * DP in Waiting_for_Instructions. Tssf is loaded with timerValue
 * and restarted; no FSM state change. Only timerID `tssf` is
 * permitted. unknownPDPID if PDPID unknown.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resetTimerGPRS OPERATION ::= {
 *     ARGUMENT    ResetTimerGPRSArg
 *     RETURN RESULT    FALSE
 *     ERRORS        {missingParameter |
 *             parameterOutOfRange |
 *             taskRefused |
 *             unexpectedComponentSequence |
 *             unexpectedDataValue |
 *             unexpectedParameter |
 *             unknownPDPID}
 *     CODE        opcode-resetTimerGPRS}
 * ```
 * 
 * @constant
 * @type {OPERATION<ResetTimerGPRSArg>}
 * @implements {OPERATION<ResetTimerGPRSArg>}
 */
export
const resetTimerGPRS: OPERATION<ResetTimerGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResetTimerGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResetTimerGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_resetTimerGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
