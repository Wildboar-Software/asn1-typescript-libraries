/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CreateCallSegmentAssociationArg, _decode_CreateCallSegmentAssociationArg, _encode_CreateCallSegmentAssociationArg } from "../IN-CS2-SSF-SCF-ops-args/CreateCallSegmentAssociationArg.ta.mjs";
// export { CreateCallSegmentAssociationArg, _decode_CreateCallSegmentAssociationArg, _encode_CreateCallSegmentAssociationArg } from "../IN-CS2-SSF-SCF-ops-args/CreateCallSegmentAssociationArg.ta.mjs";
import { CreateCallSegmentAssociationResult, _decode_CreateCallSegmentAssociationResult, _encode_CreateCallSegmentAssociationResult } from "../IN-CS2-SSF-SCF-ops-args/CreateCallSegmentAssociationResult.ta.mjs";
// export { CreateCallSegmentAssociationResult, _decode_CreateCallSegmentAssociationResult, _encode_CreateCallSegmentAssociationResult } from "../IN-CS2-SSF-SCF-ops-args/CreateCallSegmentAssociationResult.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
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
import { opcode_createCallSegmentAssociation } from "../IN-CS2-operationcodes/opcode-createCallSegmentAssociation.va.mjs";
// export { opcode_createCallSegmentAssociation } from "../IN-CS2-operationcodes/opcode-createCallSegmentAssociation.va.mjs";


/**
 * @summary createCallSegmentAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * createCallSegmentAssociation OPERATION ::= {
 *   ARGUMENT  CreateCallSegmentAssociationArg
 *   RESULT    CreateCallSegmentAssociationResult
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE      opcode-createCallSegmentAssociation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CreateCallSegmentAssociationArg, CreateCallSegmentAssociationResult>}
 * @implements {OPERATION<CreateCallSegmentAssociationArg, CreateCallSegmentAssociationResult>}
 */
export
const createCallSegmentAssociation: OPERATION<CreateCallSegmentAssociationArg, CreateCallSegmentAssociationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CreateCallSegmentAssociationArg,
        "&ResultType": _decode_CreateCallSegmentAssociationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CreateCallSegmentAssociationArg,
        "&ResultType": _encode_CreateCallSegmentAssociationResult,
    },
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_createCallSegmentAssociation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
