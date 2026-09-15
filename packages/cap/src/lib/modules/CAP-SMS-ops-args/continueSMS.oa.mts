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
import { opcode_continueSMS } from "../CAP-operationcodes/opcode-continueSMS.va.mjs";
// export { opcode_continueSMS } from "../CAP-operationcodes/opcode-continueSMS.va.mjs";


/**
 * @summary continueSMS
 * @description
 *
 * Requests the smsSSF to proceed at the DP where it suspended,
 * without substituting gsmSCF data. (3GPP TS 29.078 V19.0.0
 * clause 12.2).
 *
 * Direction: gsmSCF → smsSSF. Unconfirmed (class 4). Local opcode
 * 65. Timer Tcuesms (Short; 1–20 s, operator-defined).
 *
 * No argument. Valid while Waiting_for_Instructions at any DP.
 * FSM goes Monitoring if at least one EDP is armed, else Idle.
 * Operation-related errors are not applicable (class 4).
 * (3GPP TS 29.078 V19.0.0 clauses 7.1 and 12.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * continueSMS OPERATION ::= {
 *     RETURN RESULT    FALSE
 *     ALWAYS RESPONDS    FALSE
 *     CODE        opcode-continueSMS}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const continueSMS: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_continueSMS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
