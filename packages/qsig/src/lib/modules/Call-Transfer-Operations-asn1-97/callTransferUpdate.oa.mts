/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CTUpdateArg, _decode_CTUpdateArg, _encode_CTUpdateArg } from "../Call-Transfer-Operations-asn1-97/CTUpdateArg.ta.mjs";
// export { CTUpdateArg, _decode_CTUpdateArg, _encode_CTUpdateArg } from "../Call-Transfer-Operations-asn1-97/CTUpdateArg.ta.mjs";


/**
 * @summary callTransferUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferUpdate OPERATION ::= {
 *     ARGUMENT CTUpdateArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 13
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTUpdateArg>}
 * @implements {OPERATION<CTUpdateArg>}
 */
export
const callTransferUpdate: OPERATION<CTUpdateArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTUpdateArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTUpdateArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 13 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
