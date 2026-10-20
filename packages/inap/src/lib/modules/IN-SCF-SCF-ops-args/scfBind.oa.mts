/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SCFBindArgument, _decode_SCFBindArgument, _encode_SCFBindArgument } from "../IN-SCF-SCF-ops-args/SCFBindArgument.ta.mjs";
// export { SCFBindArgument, _decode_SCFBindArgument, _encode_SCFBindArgument } from "../IN-SCF-SCF-ops-args/SCFBindArgument.ta.mjs";
import { SCFBindResult, _decode_SCFBindResult, _encode_SCFBindResult } from "../IN-SCF-SCF-ops-args/SCFBindResult.ta.mjs";
// export { SCFBindResult, _decode_SCFBindResult, _encode_SCFBindResult } from "../IN-SCF-SCF-ops-args/SCFBindResult.ta.mjs";
import { scfBindFailure } from "../IN-errortypes/scfBindFailure.oa.mjs";
// export { scfBindFailure } from "../IN-errortypes/scfBindFailure.oa.mjs";


/**
 * @summary scfBind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfBind OPERATION ::= {
 *   ARGUMENT  SCFBindArgument
 *   OPTIONAL  TRUE
 *   RESULT    SCFBindResult
 *   OPTIONAL  TRUE
 *   ERRORS    {scfBindFailure}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SCFBindArgument, SCFBindResult>}
 * @implements {OPERATION<SCFBindArgument, SCFBindResult>}
 */
export
const scfBind: OPERATION<SCFBindArgument, SCFBindResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SCFBindArgument,
        "&ResultType": _decode_SCFBindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SCFBindArgument,
        "&ResultType": _encode_SCFBindResult,
    },
    "&argumentTypeOptional": true /* OBJECT_FIELD_SETTING */,
    "&resultTypeOptional": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ scfBindFailure, ] /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
