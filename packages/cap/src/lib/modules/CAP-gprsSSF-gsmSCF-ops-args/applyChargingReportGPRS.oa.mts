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
import { ApplyChargingReportGPRSArg, _decode_ApplyChargingReportGPRSArg, _encode_ApplyChargingReportGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ApplyChargingReportGPRSArg.ta.mjs";
// export { ApplyChargingReportGPRSArg, _decode_ApplyChargingReportGPRSArg, _encode_ApplyChargingReportGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ApplyChargingReportGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
// export { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_applyChargingReportGPRS } from "../CAP-operationcodes/opcode-applyChargingReportGPRS.va.mjs";
// export { opcode_applyChargingReportGPRS } from "../CAP-operationcodes/opcode-applyChargingReportGPRS.va.mjs";


/**
 * @summary applyChargingReportGPRS
 * @description
 *
 * Reports charging information previously requested by
 * ApplyChargingGPRS. Timing/volume count starts on Attach, PDP
 * Context Establishment Acknowledgement, or Inter-SGSN RA Update
 * acceptance. Report on PDP Disconnect, Detach, chargeable QoS
 * change, or when transferredVolume / elapsedTime is reached.
 * (3GPP TS 29.078 V19.0.0 clause 13.3).
 *
 * Direction: gprsSSF → gsmSCF. Confirmed (class 1). Local opcode
 * 72. Timer Tacrg (Short; 1–20 s, operator-defined).
 *
 * Timer expiry: abort TC dialogue, terminate GPRS dialogue, apply
 * default GPRS handling from CSI. unknownPDPID if PDPID unknown.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applyChargingReportGPRS OPERATION ::= {
 *     ARGUMENT    ApplyChargingReportGPRSArg
 *     RETURN RESULT    TRUE
 *     ERRORS        {missingParameter |
 *             unexpectedComponentSequence |
 *             unexpectedParameter |
 *             unexpectedDataValue |
 *             parameterOutOfRange |
 *             systemFailure |
 *             taskRefused |
 *             unknownPDPID}
 *     CODE        opcode-applyChargingReportGPRS}
 * ```
 * 
 * @constant
 * @type {OPERATION<ApplyChargingReportGPRSArg>}
 * @implements {OPERATION<ApplyChargingReportGPRSArg>}
 */
export
const applyChargingReportGPRS: OPERATION<ApplyChargingReportGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ApplyChargingReportGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ApplyChargingReportGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, parameterOutOfRange, systemFailure, taskRefused, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_applyChargingReportGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
