/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TFCArgument, _decode_TFCArgument, _encode_TFCArgument } from "../IN-CS3-SCF-SDF-Operations/TFCArgument.ta.mjs";
// export { TFCArgument, _decode_TFCArgument, _encode_TFCArgument } from "../IN-CS3-SCF-SDF-Operations/TFCArgument.ta.mjs";
import { opcode_trafficFlowControl } from "../IN-CS3-operationcodes/opcode-trafficFlowControl.va.mjs";
// export { opcode_trafficFlowControl } from "../IN-CS3-operationcodes/opcode-trafficFlowControl.va.mjs";


/**
 * @summary trafficFlowControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * trafficFlowControl OPERATION ::= {
 *   ARGUMENT         TFCArgument
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-trafficFlowControl
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<TFCArgument>}
 * @implements {OPERATION<TFCArgument>}
 */
export
const trafficFlowControl: OPERATION<TFCArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TFCArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TFCArgument,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_trafficFlowControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
