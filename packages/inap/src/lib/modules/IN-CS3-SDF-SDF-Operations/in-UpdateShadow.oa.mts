import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type IN_UpdateShadowArgument, _decode_IN_UpdateShadowArgument, _encode_IN_UpdateShadowArgument } from "../IN-CS3-SDF-SDF-Operations/IN-UpdateShadowArgument.ta.mjs";
// export { IN_UpdateShadowArgument, _decode_IN_UpdateShadowArgument, _encode_IN_UpdateShadowArgument } from "../IN-CS3-SDF-SDF-Operations/IN-UpdateShadowArgument.ta.mjs";
import { type IN_UpdateShadowResult, _decode_IN_UpdateShadowResult, _encode_IN_UpdateShadowResult } from "../IN-CS3-SDF-SDF-Operations/IN-UpdateShadowResult.ta.mjs";
// export { IN_UpdateShadowResult, _decode_IN_UpdateShadowResult, _encode_IN_UpdateShadowResult } from "../IN-CS3-SDF-SDF-Operations/IN-UpdateShadowResult.ta.mjs";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
// export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
import { id_opcode_updateShadow } from "../DirectoryInformationShadowProtocol/id-opcode-updateShadow.va.mjs";
// export { id_opcode_updateShadow } from "../DirectoryInformationShadowProtocol/id-opcode-updateShadow.va.mjs";


/**
 * @summary in_UpdateShadow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-UpdateShadow OPERATION ::= {
 *   ARGUMENT  IN-UpdateShadowArgument
 *   RESULT    IN-UpdateShadowResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-updateShadow
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_UpdateShadowArgument, IN_UpdateShadowResult>}
 * @implements {OPERATION<IN_UpdateShadowArgument, IN_UpdateShadowResult>}
 */
export
const in_UpdateShadow: OPERATION<IN_UpdateShadowArgument, IN_UpdateShadowResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_UpdateShadowArgument,
        "&ResultType": _decode_IN_UpdateShadowResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_UpdateShadowArgument,
        "&ResultType": _encode_IN_UpdateShadowResult,
    },
    "&Errors": [ shadowError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_updateShadow /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
