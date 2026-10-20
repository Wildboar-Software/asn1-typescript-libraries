/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { NameArg, _decode_NameArg, _encode_NameArg } from "../Name-Operations-asn1-97/NameArg.ta.mjs";
// export { NameArg, _decode_NameArg, _encode_NameArg } from "../Name-Operations-asn1-97/NameArg.ta.mjs";


/**
 * @summary callingName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callingName OPERATION ::= {
 *     ARGUMENT NameArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 0
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NameArg>}
 * @implements {OPERATION<NameArg>}
 */
export
const callingName: OPERATION<NameArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NameArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_NameArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 0 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
