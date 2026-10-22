import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IN_ExecuteArgument, _decode_IN_ExecuteArgument, _encode_IN_ExecuteArgument } from "../IN-SCF-SDF-Additional-Definitions/IN-ExecuteArgument.ta.mjs";
// export { IN_ExecuteArgument, _decode_IN_ExecuteArgument, _encode_IN_ExecuteArgument } from "../IN-SCF-SDF-Additional-Definitions/IN-ExecuteArgument.ta.mjs";
import { ExecuteResult, _decode_ExecuteResult, _encode_ExecuteResult } from "../IN-SCF-SDF-operations/ExecuteResult.ta.mjs";
// export { ExecuteResult, _decode_ExecuteResult, _encode_ExecuteResult } from "../IN-SCF-SDF-operations/ExecuteResult.ta.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { in_ServiceError } from "../IN-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
// export { in_ServiceError } from "../IN-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { executionError } from "../IN-errortypes/executionError.oa.mjs";
// export { executionError } from "../IN-errortypes/executionError.oa.mjs";
import { opcode_execute } from "../IN-operationcodes/opcode-execute.va.mjs";
// export { opcode_execute } from "../IN-operationcodes/opcode-execute.va.mjs";


/**
 * @summary in_Execute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-Execute OPERATION ::= {
 *   ARGUMENT  IN-ExecuteArgument
 *   RESULT    ExecuteResult
 *   ERRORS
 *     {attributeError | nameError | in-ServiceError | referral | securityError |
 *       updateError | executionError}
 *   CODE      opcode-execute
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_ExecuteArgument, ExecuteResult>}
 * @implements {OPERATION<IN_ExecuteArgument, ExecuteResult>}
 */
export
const in_Execute: OPERATION<IN_ExecuteArgument, ExecuteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_ExecuteArgument,
        "&ResultType": _decode_ExecuteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_ExecuteArgument,
        "&ResultType": _encode_ExecuteResult,
    },
    "&Errors": [ attributeError, nameError, in_ServiceError, referral, securityError, updateError, executionError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_execute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
