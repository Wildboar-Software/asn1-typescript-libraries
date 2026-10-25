/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type EntityReleasedArg, _decode_EntityReleasedArg, _encode_EntityReleasedArg } from "../IN-CS3-SSF-SCF-ops-args/EntityReleasedArg.ta.mjs";
// export { EntityReleasedArg, _decode_EntityReleasedArg, _encode_EntityReleasedArg } from "../IN-CS3-SSF-SCF-ops-args/EntityReleasedArg.ta.mjs";
import { opcode_entityReleased } from "../IN-CS3-operationcodes/opcode-entityReleased.va.mjs";
// export { opcode_entityReleased } from "../IN-CS3-operationcodes/opcode-entityReleased.va.mjs";


/**
 * @summary entityReleased
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * entityReleased OPERATION ::= {
 *   ARGUMENT         EntityReleasedArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-entityReleased
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EntityReleasedArg>}
 * @implements {OPERATION<EntityReleasedArg>}
 */
export
const entityReleased: OPERATION<EntityReleasedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EntityReleasedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EntityReleasedArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_entityReleased /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
