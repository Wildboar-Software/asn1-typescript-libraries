/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AocRateArg, _decode_AocRateArg, _encode_AocRateArg } from "../SS-AOC-Operations-asn1-97/AocRateArg.ta.mjs";
// export { AocRateArg, _decode_AocRateArg, _encode_AocRateArg } from "../SS-AOC-Operations-asn1-97/AocRateArg.ta.mjs";


/**
 * @summary aocRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocRate OPERATION ::= {
 *     ARGUMENT AocRateArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 63
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocRateArg>}
 * @implements {OPERATION<AocRateArg>}
 */
export
const aocRate: OPERATION<AocRateArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocRateArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocRateArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 63 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
