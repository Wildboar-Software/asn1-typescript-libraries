import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InitiateCallRequestArg, _decode_InitiateCallRequestArg, _encode_InitiateCallRequestArg } from "../IN-SCF-SCF-ops-args/InitiateCallRequestArg.ta.mjs";
// export { InitiateCallRequestArg, _decode_InitiateCallRequestArg, _encode_InitiateCallRequestArg } from "../IN-SCF-SCF-ops-args/InitiateCallRequestArg.ta.mjs";
import { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { scfTaskRefused } from "../IN-errortypes/scfTaskRefused.oa.mjs";
// export { scfTaskRefused } from "../IN-errortypes/scfTaskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_initiateCallRequest } from "../IN-operationcodes/opcode-initiateCallRequest.va.mjs";
// export { opcode_initiateCallRequest } from "../IN-operationcodes/opcode-initiateCallRequest.va.mjs";


/**
 * @summary initiateCallRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiateCallRequest OPERATION ::= {
 *   ARGUMENT         InitiateCallRequestArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | scfTaskRefused
 *       | unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter
 *       | parameterOutOfRange | securityError}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-initiateCallRequest
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InitiateCallRequestArg>}
 * @implements {OPERATION<InitiateCallRequestArg>}
 */
export
const initiateCallRequest: OPERATION<InitiateCallRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitiateCallRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitiateCallRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, parameterOutOfRange, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initiateCallRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
