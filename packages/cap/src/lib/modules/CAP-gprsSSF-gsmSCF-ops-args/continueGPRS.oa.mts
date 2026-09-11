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
import { ContinueGPRSArg, _decode_ContinueGPRSArg, _encode_ContinueGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ContinueGPRSArg.ta.mjs";
// export { ContinueGPRSArg, _decode_ContinueGPRSArg, _encode_ContinueGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ContinueGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
// export { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { opcode_continueGPRS } from "../CAP-operationcodes/opcode-continueGPRS.va.mjs";
// export { opcode_continueGPRS } from "../CAP-operationcodes/opcode-continueGPRS.va.mjs";


/**
 * @summary continueGPRS
 * @description
 *
 * Requests the gprsSSF to proceed at the DP where it suspended,
 * without substituting gsmSCF data. (3GPP TS 29.078 V19.0.0
 * clause 13.6).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2 in ASN.1). Local
 * opcode 75. Timer Tcueg (Short; 1–20 s, operator-defined).
 *
 * Valid in a control relationship while Waiting_for_Instructions.
 * FSM → Monitoring if an EDP is armed or ApplyChargingReportGPRS
 * was requested, else Idle. unknownPDPID if PDPID unknown.
 * Clause 13.6.2.2 states class 4 (errors not applicable); the
 * ASN.1 lists ERRORS.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * continueGPRS OPERATION ::= {
 *     ARGUMENT    ContinueGPRSArg
 *     RETURN RESULT    FALSE
 *     ERRORS        {missingParameter |
 *             unknownPDPID |
 *             unexpectedDataValue}
 *     CODE        opcode-continueGPRS}
 * ```
 * 
 * @constant
 * @type {OPERATION<ContinueGPRSArg>}
 * @implements {OPERATION<ContinueGPRSArg>}
 */
export
const continueGPRS: OPERATION<ContinueGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ContinueGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ContinueGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unknownPDPID, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_continueGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
