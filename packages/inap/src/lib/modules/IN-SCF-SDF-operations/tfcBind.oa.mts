/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TFCBindArgument, _decode_TFCBindArgument, _encode_TFCBindArgument } from "../IN-SCF-SDF-operations/TFCBindArgument.ta.mjs";
// export { TFCBindArgument, _decode_TFCBindArgument, _encode_TFCBindArgument } from "../IN-SCF-SDF-operations/TFCBindArgument.ta.mjs";
import { TFCBindResult, _decode_TFCBindResult, _encode_TFCBindResult } from "../IN-SCF-SDF-operations/TFCBindResult.ta.mjs";
// export { TFCBindResult, _decode_TFCBindResult, _encode_TFCBindResult } from "../IN-SCF-SDF-operations/TFCBindResult.ta.mjs";
import { tfcBindError } from "../IN-errortypes/tfcBindError.oa.mjs";
// export { tfcBindError } from "../IN-errortypes/tfcBindError.oa.mjs";


/**
 * @summary tfcBind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcBind OPERATION ::= {
 *   ARGUMENT  TFCBindArgument
 *   OPTIONAL  TRUE
 *   RESULT    TFCBindResult
 *   OPTIONAL  TRUE
 *   ERRORS    {tfcBindError}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<TFCBindArgument, TFCBindResult>}
 * @implements {OPERATION<TFCBindArgument, TFCBindResult>}
 */
export
const tfcBind: OPERATION<TFCBindArgument, TFCBindResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TFCBindArgument,
        "&ResultType": _decode_TFCBindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_TFCBindArgument,
        "&ResultType": _encode_TFCBindResult,
    },
    "&argumentTypeOptional": true /* OBJECT_FIELD_SETTING */,
    "&resultTypeOptional": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ tfcBindError, ] /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
