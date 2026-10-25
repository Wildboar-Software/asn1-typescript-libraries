import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type HandlingInformationRequestArg, _decode_HandlingInformationRequestArg, _encode_HandlingInformationRequestArg } from "../IN-CS3-SCF-SCF-ops-args/HandlingInformationRequestArg.ta.mjs";
// export { HandlingInformationRequestArg, _decode_HandlingInformationRequestArg, _encode_HandlingInformationRequestArg } from "../IN-CS3-SCF-SCF-ops-args/HandlingInformationRequestArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
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
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { scfReferral } from "../IN-CS3-errortypes/scfReferral.oa.mjs";
// export { scfReferral } from "../IN-CS3-errortypes/scfReferral.oa.mjs";
import { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
// export { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
import { opcode_handlingInformationRequest } from "../IN-CS3-operationcodes/opcode-handlingInformationRequest.va.mjs";
// export { opcode_handlingInformationRequest } from "../IN-CS3-operationcodes/opcode-handlingInformationRequest.va.mjs";


/**
 * @summary handlingInformationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * handlingInformationRequest OPERATION ::= {
 *   ARGUMENT         HandlingInformationRequestArg
 *   RESULT
 *     NULL --EDITOR: &ResultType has to be defined because it is used in scfChained
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
 * @type {OPERATION<HandlingInformationRequestArg, NULL>}
 * @implements {OPERATION<HandlingInformationRequestArg, NULL>}
 */
export
const handlingInformationRequest: OPERATION<HandlingInformationRequestArg, NULL> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HandlingInformationRequestArg,
        "&ResultType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": _encode_HandlingInformationRequestArg,
        "&ResultType": $._encodeNull,
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
