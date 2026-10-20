/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTActiveArg, _decode_CTActiveArg, _encode_CTActiveArg } from "../Call-Transfer-Operations-asn1-97/CTActiveArg.ta.mjs";

/**
 * @summary callTransferActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferActive OPERATION ::= {
 *     ARGUMENT CTActiveArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 11
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTActiveArg>}
 * @implements {OPERATION<CTActiveArg>}
 */
export
const callTransferActive: OPERATION<CTActiveArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTActiveArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTActiveArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 11 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
