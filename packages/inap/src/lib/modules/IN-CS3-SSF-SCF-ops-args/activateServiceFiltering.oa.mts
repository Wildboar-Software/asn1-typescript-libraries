/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ActivateServiceFilteringArg, _decode_ActivateServiceFilteringArg, _encode_ActivateServiceFilteringArg } from "../IN-CS3-SSF-SCF-ops-args/ActivateServiceFilteringArg.ta.mjs";
// export { ActivateServiceFilteringArg, _decode_ActivateServiceFilteringArg, _encode_ActivateServiceFilteringArg } from "../IN-CS3-SSF-SCF-ops-args/ActivateServiceFilteringArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { opcode_activateServiceFiltering } from "../IN-CS3-operationcodes/opcode-activateServiceFiltering.va.mjs";
// export { opcode_activateServiceFiltering } from "../IN-CS3-operationcodes/opcode-activateServiceFiltering.va.mjs";


/**
 * @summary activateServiceFiltering
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activateServiceFiltering OPERATION ::= {
 *   ARGUMENT       ActivateServiceFilteringArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedParameter}
 *   CODE           opcode-activateServiceFiltering
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ActivateServiceFilteringArg>}
 * @implements {OPERATION<ActivateServiceFilteringArg>}
 */
export
const activateServiceFiltering: OPERATION<ActivateServiceFilteringArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ActivateServiceFilteringArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ActivateServiceFilteringArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_activateServiceFiltering /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
