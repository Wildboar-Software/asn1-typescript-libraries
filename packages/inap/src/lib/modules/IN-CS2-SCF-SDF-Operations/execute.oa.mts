import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ExecuteArgument, _decode_ExecuteArgument, _encode_ExecuteArgument } from "../IN-CS2-SCF-SDF-Operations/ExecuteArgument.ta.mjs";
// export { ExecuteArgument, _decode_ExecuteArgument, _encode_ExecuteArgument } from "../IN-CS2-SCF-SDF-Operations/ExecuteArgument.ta.mjs";
import { ExecuteResult, _decode_ExecuteResult, _encode_ExecuteResult } from "../IN-CS2-SCF-SDF-Operations/ExecuteResult.ta.mjs";
// export { ExecuteResult, _decode_ExecuteResult, _encode_ExecuteResult } from "../IN-CS2-SCF-SDF-Operations/ExecuteResult.ta.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { executionError } from "../IN-CS2-SCF-SDF-Operations/executionError.oa.mjs";
// export { executionError } from "../IN-CS2-SCF-SDF-Operations/executionError.oa.mjs";
import { id_opcode_execute } from "../IN-CS2-SCF-SDF-Operations/id-opcode-execute.va.mjs";
// export { id_opcode_execute } from "../IN-CS2-SCF-SDF-Operations/id-opcode-execute.va.mjs";


/**
 * @summary execute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * execute OPERATION ::= {
 *   ARGUMENT  ExecuteArgument
 *   RESULT    ExecuteResult
 *   ERRORS
 *     {attributeError | nameError | serviceError | referral | securityError |
 *       updateError | executionError}
 *   CODE      id-opcode-execute
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ExecuteArgument, ExecuteResult>}
 * @implements {OPERATION<ExecuteArgument, ExecuteResult>}
 */
export
const execute: OPERATION<ExecuteArgument, ExecuteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ExecuteArgument,
        "&ResultType": _decode_ExecuteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ExecuteArgument,
        "&ResultType": _encode_ExecuteResult,
    },
    "&Errors": [ attributeError, nameError, serviceError, referral, securityError, updateError, executionError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_execute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
