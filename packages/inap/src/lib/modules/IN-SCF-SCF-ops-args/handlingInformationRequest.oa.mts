/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { HandlingInformationRequestArg, _decode_HandlingInformationRequestArg, _encode_HandlingInformationRequestArg } from "../IN-SCF-SCF-ops-args/HandlingInformationRequestArg.ta.mjs";
// export { HandlingInformationRequestArg, _decode_HandlingInformationRequestArg, _encode_HandlingInformationRequestArg } from "../IN-SCF-SCF-ops-args/HandlingInformationRequestArg.ta.mjs";
import { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
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
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { scfReferral } from "../IN-errortypes/scfReferral.oa.mjs";
// export { scfReferral } from "../IN-errortypes/scfReferral.oa.mjs";
import { handlingInformationResult } from "../IN-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
// export { handlingInformationResult } from "../IN-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
import { opcode_handlingInformationRequest } from "../IN-operationcodes/opcode-handlingInformationRequest.va.mjs";
// export { opcode_handlingInformationRequest } from "../IN-operationcodes/opcode-handlingInformationRequest.va.mjs";


/**
 * @summary handlingInformationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * handlingInformationRequest OPERATION ::= {
 *   ARGUMENT         HandlingInformationRequestArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | parameterOutOfRange |
 *       systemFailure | scfTaskRefused | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter | securityError | scfReferral}
 *   LINKED           {handlingInformationResult}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-handlingInformationRequest
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<HandlingInformationRequestArg>}
 * @implements {OPERATION<HandlingInformationRequestArg>}
 */
export
const handlingInformationRequest: OPERATION<HandlingInformationRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HandlingInformationRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_HandlingInformationRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, securityError, scfReferral, ] /* OBJECT_FIELD_SETTING */,
    "&Linked": [ handlingInformationResult, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_handlingInformationRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
