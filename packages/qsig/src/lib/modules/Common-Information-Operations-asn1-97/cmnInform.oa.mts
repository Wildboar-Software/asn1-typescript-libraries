/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CmnArg, _decode_CmnArg, _encode_CmnArg } from "../Common-Information-Operations-asn1-97/CmnArg.ta.mjs";
// export { CmnArg, _decode_CmnArg, _encode_CmnArg } from "../Common-Information-Operations-asn1-97/CmnArg.ta.mjs";


/**
 * @summary cmnInform
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cmnInform OPERATION ::= {
 *     ARGUMENT CmnArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 85
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CmnArg>}
 * @implements {OPERATION<CmnArg>}
 */
export
const cmnInform: OPERATION<CmnArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CmnArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CmnArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 85 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
