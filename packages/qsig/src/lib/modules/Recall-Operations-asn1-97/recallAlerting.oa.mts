/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReAlertingArg, _decode_ReAlertingArg, _encode_ReAlertingArg } from "../Recall-Operations-asn1-97/ReAlertingArg.ta.mjs";

/**
 * @summary recallAlerting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * recallAlerting OPERATION ::= {
 *     -- Sent from the Served User PINX to the Primary PINX
 *     ARGUMENT ReAlertingArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 57
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReAlertingArg>}
 * @implements {OPERATION<ReAlertingArg>}
 */
export
const recallAlerting: OPERATION<ReAlertingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReAlertingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReAlertingArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 57 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
