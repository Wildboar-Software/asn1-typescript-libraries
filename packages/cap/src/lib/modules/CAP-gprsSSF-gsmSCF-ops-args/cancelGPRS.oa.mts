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
import { CancelGPRSArg, _decode_CancelGPRSArg, _encode_CancelGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/CancelGPRSArg.ta.mjs";
// export { CancelGPRSArg, _decode_CancelGPRSArg, _encode_CancelGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/CancelGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
// export { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_cancelGPRS } from "../CAP-operationcodes/opcode-cancelGPRS.va.mjs";
// export { opcode_cancelGPRS } from "../CAP-operationcodes/opcode-cancelGPRS.va.mjs";


/**
 * @summary cancelGPRS
 * @description
 *
 * Disarms all pending EDPs and cancels all pending reports for a
 * GPRS Session or a specific PDP Context, allowing the gprsSSF
 * FSM to go Idle. Cannot cancel a previous operation.
 * (3GPP TS 29.078 V19.0.0 clause 13.4).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2). Local opcode
 * 73. Timer Tcag (Short; 1–20 s, operator-defined).
 *
 * If pDPID is present, cancelling applies to that PDP Context
 * only. From Monitoring with nothing left armed/pending → Idle;
 * from Waiting_for_Instructions remains there. The session or PDP
 * Context, if still active, is then treated as non-CAMEL.
 * unknownPDPID if PDPID unknown.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelGPRS OPERATION ::= {
 *     ARGUMENT    CancelGPRSArg
 *     RETURN RESULT    FALSE
 *     ERRORS        {missingParameter |
 *             taskRefused |
 *             unknownPDPID}
 *     CODE        opcode-cancelGPRS}
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelGPRSArg>}
 * @implements {OPERATION<CancelGPRSArg>}
 */
export
const cancelGPRS: OPERATION<CancelGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_cancelGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
