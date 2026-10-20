/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ProvideUserInformationArg, _decode_ProvideUserInformationArg, _encode_ProvideUserInformationArg } from "../IN-CS2-SCF-SCF-ops-args/ProvideUserInformationArg.ta.mjs";
// export { ProvideUserInformationArg, _decode_ProvideUserInformationArg, _encode_ProvideUserInformationArg } from "../IN-CS2-SCF-SCF-ops-args/ProvideUserInformationArg.ta.mjs";
import { ProvideUserInformationResultArg, _decode_ProvideUserInformationResultArg, _encode_ProvideUserInformationResultArg } from "../IN-CS2-SCF-SCF-ops-args/ProvideUserInformationResultArg.ta.mjs";
// export { ProvideUserInformationResultArg, _decode_ProvideUserInformationResultArg, _encode_ProvideUserInformationResultArg } from "../IN-CS2-SCF-SCF-ops-args/ProvideUserInformationResultArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS2-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS2-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { scfTaskRefused } from "../IN-CS2-SCF-SCF-ops-args/scfTaskRefused.oa.mjs";
// export { scfTaskRefused } from "../IN-CS2-SCF-SCF-ops-args/scfTaskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { improperCallerResponse } from "../IN-CS2-errortypes/improperCallerResponse.oa.mjs";
// export { improperCallerResponse } from "../IN-CS2-errortypes/improperCallerResponse.oa.mjs";
import { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_provideUserInformation } from "../IN-CS2-operationcodes/opcode-provideUserInformation.va.mjs";
// export { opcode_provideUserInformation } from "../IN-CS2-operationcodes/opcode-provideUserInformation.va.mjs";


/**
 * @summary provideUserInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideUserInformation OPERATION ::= {
 *   ARGUMENT  ProvideUserInformationArg
 *   RESULT    ProvideUserInformationResultArg
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | scfTaskRefused
 *       | unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter
 *       | improperCallerResponse | parameterOutOfRange | securityError}
 *   CODE      opcode-provideUserInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProvideUserInformationArg, ProvideUserInformationResultArg>}
 * @implements {OPERATION<ProvideUserInformationArg, ProvideUserInformationResultArg>}
 */
export
const provideUserInformation: OPERATION<ProvideUserInformationArg, ProvideUserInformationResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProvideUserInformationArg,
        "&ResultType": _decode_ProvideUserInformationResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProvideUserInformationArg,
        "&ResultType": _encode_ProvideUserInformationResultArg,
    },
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, improperCallerResponse, parameterOutOfRange, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_provideUserInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
