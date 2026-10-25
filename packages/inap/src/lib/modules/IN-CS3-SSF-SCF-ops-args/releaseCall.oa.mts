/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ReleaseCallArg, _decode_ReleaseCallArg, _encode_ReleaseCallArg } from "../IN-CS3-SSF-SCF-ops-args/ReleaseCallArg.ta.mjs";
// export { ReleaseCallArg, _decode_ReleaseCallArg, _encode_ReleaseCallArg } from "../IN-CS3-SSF-SCF-ops-args/ReleaseCallArg.ta.mjs";
import { opcode_releaseCall } from "../IN-CS3-operationcodes/opcode-releaseCall.va.mjs";
// export { opcode_releaseCall } from "../IN-CS3-operationcodes/opcode-releaseCall.va.mjs";


/**
 * @summary releaseCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * releaseCall OPERATION ::= {
 *   ARGUMENT         ReleaseCallArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-releaseCall
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReleaseCallArg>}
 * @implements {OPERATION<ReleaseCallArg>}
 */
export
const releaseCall: OPERATION<ReleaseCallArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReleaseCallArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReleaseCallArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_releaseCall /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
