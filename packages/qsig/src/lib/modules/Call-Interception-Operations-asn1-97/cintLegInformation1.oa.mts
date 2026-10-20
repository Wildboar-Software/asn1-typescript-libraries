/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CintInformation1Arg, _decode_CintInformation1Arg, _encode_CintInformation1Arg } from "../Call-Interception-Operations-asn1-97/CintInformation1Arg.ta.mjs";
// export { CintInformation1Arg, _decode_CintInformation1Arg, _encode_CintInformation1Arg } from "../Call-Interception-Operations-asn1-97/CintInformation1Arg.ta.mjs";


/**
 * @summary cintLegInformation1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cintLegInformation1 OPERATION ::= {
 *     -- Sent from the Intercepting PINX to the Originating PINX --
 *     ARGUMENT CintInformation1Arg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 66
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CintInformation1Arg>}
 * @implements {OPERATION<CintInformation1Arg>}
 */
export
const cintLegInformation1: OPERATION<CintInformation1Arg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CintInformation1Arg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CintInformation1Arg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 66 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
