/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InitiateAssociationArg, _decode_InitiateAssociationArg, _encode_InitiateAssociationArg } from "../IN-CS2-SCF-CUSF-ops-args/InitiateAssociationArg.ta.mjs";
// export { InitiateAssociationArg, _decode_InitiateAssociationArg, _encode_InitiateAssociationArg } from "../IN-CS2-SCF-CUSF-ops-args/InitiateAssociationArg.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { opcode_initiateAssociation } from "../IN-CS2-operationcodes/opcode-initiateAssociation.va.mjs";
// export { opcode_initiateAssociation } from "../IN-CS2-operationcodes/opcode-initiateAssociation.va.mjs";


/**
 * @summary initiateAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiateAssociation OPERATION ::= {
 *   ARGUMENT       InitiateAssociationArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           opcode-initiateAssociation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InitiateAssociationArg>}
 * @implements {OPERATION<InitiateAssociationArg>}
 */
export
const initiateAssociation: OPERATION<InitiateAssociationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitiateAssociationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitiateAssociationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initiateAssociation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
