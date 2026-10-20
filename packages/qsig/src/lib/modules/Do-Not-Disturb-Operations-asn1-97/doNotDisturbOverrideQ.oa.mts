/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DNDOverrideArg, _decode_DNDOverrideArg, _encode_DNDOverrideArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDOverrideArg.ta.mjs";
// export { DNDOverrideArg, _decode_DNDOverrideArg, _encode_DNDOverrideArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDOverrideArg.ta.mjs";


/**
 * @summary doNotDisturbOverrideQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturbOverrideQ OPERATION ::= {
 *     ARGUMENT DNDOverrideArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 38
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DNDOverrideArg>}
 * @implements {OPERATION<DNDOverrideArg>}
 */
export
const doNotDisturbOverrideQ: OPERATION<DNDOverrideArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DNDOverrideArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DNDOverrideArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 38 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
