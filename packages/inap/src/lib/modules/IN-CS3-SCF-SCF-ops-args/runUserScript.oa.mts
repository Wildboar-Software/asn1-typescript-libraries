import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type RunUserScriptArg, _decode_RunUserScriptArg, _encode_RunUserScriptArg } from "../IN-CS3-SCF-SCF-ops-args/RunUserScriptArg.ta.mjs";
// export { RunUserScriptArg, _decode_RunUserScriptArg, _encode_RunUserScriptArg } from "../IN-CS3-SCF-SCF-ops-args/RunUserScriptArg.ta.mjs";
import { type RunUserScriptResultArg, _decode_RunUserScriptResultArg, _encode_RunUserScriptResultArg } from "../IN-CS3-SCF-SCF-ops-args/RunUserScriptResultArg.ta.mjs";
// export { RunUserScriptResultArg, _decode_RunUserScriptResultArg, _encode_RunUserScriptResultArg } from "../IN-CS3-SCF-SCF-ops-args/RunUserScriptResultArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { scfTaskRefused } from "../IN-CS3-errortypes/scfTaskRefused.oa.mjs";
// export { scfTaskRefused } from "../IN-CS3-errortypes/scfTaskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { improperCallerResponse } from "../IN-CS3-errortypes/improperCallerResponse.oa.mjs";
// export { improperCallerResponse } from "../IN-CS3-errortypes/improperCallerResponse.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_runUserScript } from "../IN-CS3-operationcodes/opcode-runUserScript.va.mjs";
// export { opcode_runUserScript } from "../IN-CS3-operationcodes/opcode-runUserScript.va.mjs";


/**
 * @summary runUserScript
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * runUserScript OPERATION ::= {
 *   ARGUMENT  RunUserScriptArg
 *   RESULT    RunUserScriptResultArg
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | scfTaskRefused
 *       | unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter
 *       | improperCallerResponse | parameterOutOfRange | securityError}
 *   CODE      opcode-runUserScript
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<RunUserScriptArg, RunUserScriptResultArg>}
 * @implements {OPERATION<RunUserScriptArg, RunUserScriptResultArg>}
 */
export
const runUserScript: OPERATION<RunUserScriptArg, RunUserScriptResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RunUserScriptArg,
        "&ResultType": _decode_RunUserScriptResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_RunUserScriptArg,
        "&ResultType": _encode_RunUserScriptResultArg,
    },
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, improperCallerResponse, parameterOutOfRange, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_runUserScript /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
