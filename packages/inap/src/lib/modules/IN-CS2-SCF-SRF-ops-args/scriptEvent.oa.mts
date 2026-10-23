/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ScriptEventArg, _decode_ScriptEventArg, _encode_ScriptEventArg } from "../IN-CS2-SCF-SRF-ops-args/ScriptEventArg.ta.mjs";
// export { ScriptEventArg, _decode_ScriptEventArg, _encode_ScriptEventArg } from "../IN-CS2-SCF-SRF-ops-args/ScriptEventArg.ta.mjs";
import { opcode_scriptEvent } from "../IN-CS2-operationcodes/opcode-scriptEvent.va.mjs";
// export { opcode_scriptEvent } from "../IN-CS2-operationcodes/opcode-scriptEvent.va.mjs";


/**
 * @summary scriptEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scriptEvent OPERATION ::= {
 *   ARGUMENT         ScriptEventArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-scriptEvent
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ScriptEventArg>}
 * @implements {OPERATION<ScriptEventArg>}
 */
export
const scriptEvent: OPERATION<ScriptEventArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ScriptEventArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ScriptEventArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_scriptEvent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
