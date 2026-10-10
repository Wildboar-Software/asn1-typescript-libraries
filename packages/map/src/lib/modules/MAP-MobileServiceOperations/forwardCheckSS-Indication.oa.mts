/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary forwardCheckSS_Indication
 * @description
 *
 * MAP_FORWARD_CHECK_SS_INDICATION: optional HLR indication that SS parameters
 * may have been altered (e.g. after restart). If received, the VLR forwards it
 * to the MSC and the MS. Sent only after successful subscriber-data retrieval
 * embedded in MAP_UPDATE_LOCATION. Non-confirmed (no argument). Typical path:
 * HLR→VLR. Local opcode 38. Timer class `s` (3 s to 10 s). (3GPP TS 29.002
 * V19.1.0 clauses 8.10.2.1, 17.1.2, 17.3.2.2 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forwardCheckSS-Indication  OPERATION ::= {    --Timer s
 *     CODE    local:38 }
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const forwardCheckSS_Indication: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 38 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
