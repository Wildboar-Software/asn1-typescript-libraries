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
import { opcode_activityTest } from "../CAP-operationcodes/opcode-activityTest.va.mjs";
// export { opcode_activityTest } from "../CAP-operationcodes/opcode-activityTest.va.mjs";


/**
 * @summary activityTest
 * @description
 * 
 * gsmSCF uses this to check that a relationship still exists with the gsmSSF,
 * assist gsmSSF, or gsmSRF. If the relationship is alive, the receiver returns
 * a result; if timer `Tat` expires, gsmSCF assumes the receiver has failed.
 * gsmSCF → gsmSSF (also gsmSRF / assist gsmSSF). Confirmed (`RETURN RESULT
 * TRUE`). Local opcode 55. Timer `Tat` (short: 1 s–10 s; operator-defined
 * within range). Class 3: operation-related error handling is not applicable.
 * (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and 11.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activityTest OPERATION ::= {
 *     RETURN RESULT    TRUE
 *     CODE        opcode-activityTest}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const activityTest: OPERATION = {
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
    "&operationCode": opcode_activityTest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
