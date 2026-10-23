import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { HandlingInformationResultArg, _decode_HandlingInformationResultArg, _encode_HandlingInformationResultArg } from "../IN-CS2-SCF-SCF-ops-args/HandlingInformationResultArg.ta.mjs";
// export { HandlingInformationResultArg, _decode_HandlingInformationResultArg, _encode_HandlingInformationResultArg } from "../IN-CS2-SCF-SCF-ops-args/HandlingInformationResultArg.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_handlingInformationResult } from "../IN-CS2-operationcodes/opcode-handlingInformationResult.va.mjs";
// export { opcode_handlingInformationResult } from "../IN-CS2-operationcodes/opcode-handlingInformationResult.va.mjs";


/**
 * @summary handlingInformationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * handlingInformationResult OPERATION ::= {
 *   ARGUMENT       HandlingInformationResultArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | systemFailure | parameterOutOfRange |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       securityError}
 *   CODE           opcode-handlingInformationResult
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<HandlingInformationResultArg>}
 * @implements {OPERATION<HandlingInformationResultArg>}
 */
export
const handlingInformationResult: OPERATION<HandlingInformationResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HandlingInformationResultArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_HandlingInformationResultArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, parameterOutOfRange, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_handlingInformationResult /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
