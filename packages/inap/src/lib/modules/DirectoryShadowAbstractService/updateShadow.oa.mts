/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { UpdateShadowArgument, _decode_UpdateShadowArgument, _encode_UpdateShadowArgument } from "../DirectoryShadowAbstractService/UpdateShadowArgument.ta.mjs";
// export { UpdateShadowArgument, _decode_UpdateShadowArgument, _encode_UpdateShadowArgument } from "../DirectoryShadowAbstractService/UpdateShadowArgument.ta.mjs";
import { UpdateShadowResult, _decode_UpdateShadowResult, _encode_UpdateShadowResult } from "../DirectoryShadowAbstractService/UpdateShadowResult.ta.mjs";
// export { UpdateShadowResult, _decode_UpdateShadowResult, _encode_UpdateShadowResult } from "../DirectoryShadowAbstractService/UpdateShadowResult.ta.mjs";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
// export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
import { id_opcode_updateShadow } from "../DirectoryInformationShadowProtocol/id-opcode-updateShadow.va.mjs";
// export { id_opcode_updateShadow } from "../DirectoryInformationShadowProtocol/id-opcode-updateShadow.va.mjs";


/**
 * @summary updateShadow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateShadow OPERATION ::= {
 *   ARGUMENT  UpdateShadowArgument
 *   RESULT    UpdateShadowResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-updateShadow
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateShadowArgument, UpdateShadowResult>}
 * @implements {OPERATION<UpdateShadowArgument, UpdateShadowResult>}
 */
export
const updateShadow: OPERATION<UpdateShadowArgument, UpdateShadowResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateShadowArgument,
        "&ResultType": _decode_UpdateShadowResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateShadowArgument,
        "&ResultType": _encode_UpdateShadowResult,
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
