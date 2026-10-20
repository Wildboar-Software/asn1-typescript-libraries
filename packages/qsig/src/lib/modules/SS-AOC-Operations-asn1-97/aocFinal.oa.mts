/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AocFinalArg, _decode_AocFinalArg, _encode_AocFinalArg } from "../SS-AOC-Operations-asn1-97/AocFinalArg.ta.mjs";
// export { AocFinalArg, _decode_AocFinalArg, _encode_AocFinalArg } from "../SS-AOC-Operations-asn1-97/AocFinalArg.ta.mjs";


/**
 * @summary aocFinal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocFinal OPERATION ::= {
 *     ARGUMENT AocFinalArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 61
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocFinalArg>}
 * @implements {OPERATION<AocFinalArg>}
 */
export
const aocFinal: OPERATION<AocFinalArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocFinalArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocFinalArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 61 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
