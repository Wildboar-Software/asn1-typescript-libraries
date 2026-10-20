/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReAnswerArg, _decode_ReAnswerArg, _encode_ReAnswerArg } from "../Recall-Operations-asn1-97/ReAnswerArg.ta.mjs";

/**
 * @summary recallAnswered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * recallAnswered OPERATION ::= {
 *     -- Sent from the Served User PINX to the Primary PINX
 *     ARGUMENT ReAnswerArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 58
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReAnswerArg>}
 * @implements {OPERATION<ReAnswerArg>}
 */
export
const recallAnswered: OPERATION<ReAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReAnswerArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 58 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
