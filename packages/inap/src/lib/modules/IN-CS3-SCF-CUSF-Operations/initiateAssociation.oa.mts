/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InitiateAssociationArg, _decode_InitiateAssociationArg, _encode_InitiateAssociationArg } from "../IN-CS3-SCF-CUSF-Operations/InitiateAssociationArg.ta.mjs";
// export { InitiateAssociationArg, _decode_InitiateAssociationArg, _encode_InitiateAssociationArg } from "../IN-CS3-SCF-CUSF-Operations/InitiateAssociationArg.ta.mjs";
import { InitiateAssociationResultArg, _decode_InitiateAssociationResultArg, _encode_InitiateAssociationResultArg } from "../IN-CS3-SCF-CUSF-Operations/InitiateAssociationResultArg.ta.mjs";
// export { InitiateAssociationResultArg, _decode_InitiateAssociationResultArg, _encode_InitiateAssociationResultArg } from "../IN-CS3-SCF-CUSF-Operations/InitiateAssociationResultArg.ta.mjs";
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
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { opcode_initiateAssociation } from "../IN-CS3-operationcodes/opcode-initiateAssociation.va.mjs";
// export { opcode_initiateAssociation } from "../IN-CS3-operationcodes/opcode-initiateAssociation.va.mjs";


/**
 * @summary initiateAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiateAssociation OPERATION ::= {
 *   ARGUMENT         InitiateAssociationArg
 *   RESULT           InitiateAssociationResultArg
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   ALWAYS RESPONDS  TRUE
 *   CODE             opcode-initiateAssociation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InitiateAssociationArg, InitiateAssociationResultArg>}
 * @implements {OPERATION<InitiateAssociationArg, InitiateAssociationResultArg>}
 */
export
const initiateAssociation: OPERATION<InitiateAssociationArg, InitiateAssociationResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitiateAssociationArg,
        "&ResultType": _decode_InitiateAssociationResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitiateAssociationArg,
        "&ResultType": _encode_InitiateAssociationResultArg,
    },
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initiateAssociation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
