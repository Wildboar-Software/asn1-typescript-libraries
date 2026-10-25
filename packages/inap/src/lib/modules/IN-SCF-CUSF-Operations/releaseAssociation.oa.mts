/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ReleaseAssociationArg, _decode_ReleaseAssociationArg, _encode_ReleaseAssociationArg } from "../IN-SCF-CUSF-Operations/ReleaseAssociationArg.ta.mjs";
// export { ReleaseAssociationArg, _decode_ReleaseAssociationArg, _encode_ReleaseAssociationArg } from "../IN-SCF-CUSF-Operations/ReleaseAssociationArg.ta.mjs";
import { opcode_releaseAssociation } from "../IN-operationcodes/opcode-releaseAssociation.va.mjs";
// export { opcode_releaseAssociation } from "../IN-operationcodes/opcode-releaseAssociation.va.mjs";


/**
 * @summary releaseAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * releaseAssociation OPERATION ::= {
 *   ARGUMENT         ReleaseAssociationArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-releaseAssociation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReleaseAssociationArg>}
 * @implements {OPERATION<ReleaseAssociationArg>}
 */
export
const releaseAssociation: OPERATION<ReleaseAssociationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReleaseAssociationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReleaseAssociationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_releaseAssociation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
