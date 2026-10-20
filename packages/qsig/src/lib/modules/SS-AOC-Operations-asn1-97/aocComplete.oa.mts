/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AocCompleteArg, _decode_AocCompleteArg, _encode_AocCompleteArg } from "../SS-AOC-Operations-asn1-97/AocCompleteArg.ta.mjs";
// export { AocCompleteArg, _decode_AocCompleteArg, _encode_AocCompleteArg } from "../SS-AOC-Operations-asn1-97/AocCompleteArg.ta.mjs";
import { AocCompleteRes, _decode_AocCompleteRes, _encode_AocCompleteRes } from "../SS-AOC-Operations-asn1-97/AocCompleteRes.ta.mjs";
// export { AocCompleteRes, _decode_AocCompleteRes, _encode_AocCompleteRes } from "../SS-AOC-Operations-asn1-97/AocCompleteRes.ta.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";


/**
 * @summary aocComplete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocComplete OPERATION ::= {
 *     ARGUMENT AocCompleteArg
 *     RESULT AocCompleteRes
 *     ERRORS {supplementaryServiceInteractionNotAllowed}
 *     CODE local: 64
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocCompleteArg, AocCompleteRes>}
 * @implements {OPERATION<AocCompleteArg, AocCompleteRes>}
 */
export
const aocComplete: OPERATION<AocCompleteArg, AocCompleteRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocCompleteArg,
        "&ResultType": _decode_AocCompleteRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocCompleteArg,
        "&ResultType": _encode_AocCompleteRes,
    },
    "&Errors": [ supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 64 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
