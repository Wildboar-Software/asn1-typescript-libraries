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
import { ReleaseSMSArg, _decode_ReleaseSMSArg, _encode_ReleaseSMSArg } from "../CAP-SMS-ops-args/ReleaseSMSArg.ta.mjs";
// export { ReleaseSMSArg, _decode_ReleaseSMSArg, _encode_ReleaseSMSArg } from "../CAP-SMS-ops-args/ReleaseSMSArg.ta.mjs";
import { opcode_releaseSMS } from "../CAP-operationcodes/opcode-releaseSMS.va.mjs";
// export { opcode_releaseSMS } from "../CAP-operationcodes/opcode-releaseSMS.va.mjs";


/**
 * @summary releaseSMS
 * @description
 *
 * Tears down an SM submission or delivery attempt. Allowed in a
 * control relationship only (not a monitor relationship).
 * (3GPP TS 29.078 V19.0.0 clause 12.6).
 *
 * Direction: gsmSCF → smsSSF (MSC or SGSN). Unconfirmed (class 4).
 * Local opcode 66. Timer Trelsms (Short; 1–20 s, operator-defined).
 *
 * Valid in Waiting_for_Instructions at DP SMS_Collected_Info or
 * SMS_Delivery_Requested. FSM → Idle; all EDPs disarmed; MSC/SGSN
 * SM resources released. rPCause goes to the subscriber (MO) or
 * SMS-GMSC (MT) in the RP-ERROR RPDU. Errors not applicable
 * (class 4). (3GPP TS 29.078 V19.0.0 clauses 7.1 and 12.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * releaseSMS OPERATION ::= {
 *     ARGUMENT    ReleaseSMSArg
 *     RETURN RESULT    FALSE
 *     ALWAYS RESPONDS    FALSE
 *     CODE        opcode-releaseSMS}
 * ```
 * 
 * @constant
 * @type {OPERATION<ReleaseSMSArg>}
 * @implements {OPERATION<ReleaseSMSArg>}
 */
export
const releaseSMS: OPERATION<ReleaseSMSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReleaseSMSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReleaseSMSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_releaseSMS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
