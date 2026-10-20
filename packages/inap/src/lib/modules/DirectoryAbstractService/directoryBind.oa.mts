/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DirectoryBindArgument, _decode_DirectoryBindArgument, _encode_DirectoryBindArgument } from "../DirectoryAbstractService/DirectoryBindArgument.ta.mjs";
// export { DirectoryBindArgument, _decode_DirectoryBindArgument, _encode_DirectoryBindArgument } from "../DirectoryAbstractService/DirectoryBindArgument.ta.mjs";
import { DirectoryBindResult, _decode_DirectoryBindResult, _encode_DirectoryBindResult } from "../DirectoryAbstractService/DirectoryBindResult.ta.mjs";
// export { DirectoryBindResult, _decode_DirectoryBindResult, _encode_DirectoryBindResult } from "../DirectoryAbstractService/DirectoryBindResult.ta.mjs";
import { directoryBindError } from "../DirectoryAbstractService/directoryBindError.oa.mjs";
// export { directoryBindError } from "../DirectoryAbstractService/directoryBindError.oa.mjs";


/**
 * @summary directoryBind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryBind OPERATION ::= {
 *   ARGUMENT  DirectoryBindArgument
 *   RESULT    DirectoryBindResult
 *   ERRORS    {directoryBindError}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DirectoryBindArgument, DirectoryBindResult>}
 * @implements {OPERATION<DirectoryBindArgument, DirectoryBindResult>}
 */
export
const directoryBind: OPERATION<DirectoryBindArgument, DirectoryBindResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DirectoryBindArgument,
        "&ResultType": _decode_DirectoryBindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DirectoryBindArgument,
        "&ResultType": _encode_DirectoryBindResult,
    },
    "&Errors": [ directoryBindError, ] /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
