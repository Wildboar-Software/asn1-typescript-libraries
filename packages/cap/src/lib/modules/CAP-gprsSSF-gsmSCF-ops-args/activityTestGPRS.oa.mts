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
import { opcode_activityTestGPRS } from "../CAP-operationcodes/opcode-activityTestGPRS.va.mjs";
// export { opcode_activityTestGPRS } from "../CAP-operationcodes/opcode-activityTestGPRS.va.mjs";


/**
 * @summary activityTestGPRS
 * @description
 *
 * Checks that the gsmSCF–gprsSSF relationship still exists. The
 * identified gprsSSF instance returns a result if it does; if the
 * operation timer expires, the gsmSCF assumes the peer has failed.
 * Opens a new SS7 dialogue. (3GPP TS 29.078 V19.0.0 clause 13.1).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (returns result). Local
 * opcode 70. Timer Tatg (Short; 1–20 s, operator-defined).
 *
 * No argument. Requires an existing relationship, gprsSSME in Idle
 * Management, and no active TC dialogue. Overlapping active TC
 * dialogue → U-Abort with overlapping-dialogue. No gprsSSF for the
 * GPRS-ReferenceNumber → UAbort. Temporary TC dialogue is closed
 * after the result. (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activityTestGPRS OPERATION ::= {
 *     RETURN RESULT    TRUE
 *     CODE        opcode-activityTestGPRS}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const activityTestGPRS: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_activityTestGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
