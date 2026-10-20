/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";
// export { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";


/**
 * @summary cintEnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cintEnable OPERATION ::= {
 *     -- Sent to a Preceding PINX to reenable interception --
 *     ARGUMENT CintExtension
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 70
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CintExtension>}
 * @implements {OPERATION<CintExtension>}
 */
export
const cintEnable: OPERATION<CintExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CintExtension,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CintExtension,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 70 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
