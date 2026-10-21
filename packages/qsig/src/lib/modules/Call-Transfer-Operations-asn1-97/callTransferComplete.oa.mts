/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTCompleteArg, _decode_CTCompleteArg, _encode_CTCompleteArg } from "../Call-Transfer-Operations-asn1-97/CTCompleteArg.ta.mjs";

/**
 * @summary callTransferComplete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferComplete OPERATION ::= {
 *     ARGUMENT CTCompleteArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 12
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTCompleteArg>}
 * @implements {OPERATION<CTCompleteArg>}
 */
export
const callTransferComplete: OPERATION<CTCompleteArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTCompleteArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTCompleteArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 12 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
