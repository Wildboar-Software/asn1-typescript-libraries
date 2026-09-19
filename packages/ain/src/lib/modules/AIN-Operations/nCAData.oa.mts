/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { NCADataArg, _decode_NCADataArg, _encode_NCADataArg } from "../AIN-Operations/NCADataArg.ta.mjs";
// export { NCADataArg, _decode_NCADataArg, _encode_NCADataArg } from "../AIN-Operations/NCADataArg.ta.mjs";


/**
 * @summary nCAData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nCAData OPERATION ::= {
 *         ARGUMENT
 *         NCADataArg
 *         CODE private: 27394
 *         --Family Name is "NCA Signaling"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<NCADataArg>}
 * @implements {OPERATION<NCADataArg>}
 */
export
const nCAData: OPERATION<NCADataArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NCADataArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_NCADataArg,
        "&ResultType": undefined,
    },
    "&operationCode": { private_: 27394 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
