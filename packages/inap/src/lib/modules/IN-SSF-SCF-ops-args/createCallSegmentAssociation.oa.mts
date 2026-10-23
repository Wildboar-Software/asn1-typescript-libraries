/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CreateCallSegmentAssociationArg, _decode_CreateCallSegmentAssociationArg, _encode_CreateCallSegmentAssociationArg } from "../IN-SSF-SCF-ops-args/CreateCallSegmentAssociationArg.ta.mjs";
// export { CreateCallSegmentAssociationArg, _decode_CreateCallSegmentAssociationArg, _encode_CreateCallSegmentAssociationArg } from "../IN-SSF-SCF-ops-args/CreateCallSegmentAssociationArg.ta.mjs";
import { CreateCallSegmentAssociationResultArg, _decode_CreateCallSegmentAssociationResultArg, _encode_CreateCallSegmentAssociationResultArg } from "../IN-SSF-SCF-ops-args/CreateCallSegmentAssociationResultArg.ta.mjs";
// export { CreateCallSegmentAssociationResultArg, _decode_CreateCallSegmentAssociationResultArg, _encode_CreateCallSegmentAssociationResultArg } from "../IN-SSF-SCF-ops-args/CreateCallSegmentAssociationResultArg.ta.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { opcode_createCallSegmentAssociation } from "../IN-operationcodes/opcode-createCallSegmentAssociation.va.mjs";
// export { opcode_createCallSegmentAssociation } from "../IN-operationcodes/opcode-createCallSegmentAssociation.va.mjs";


/**
 * @summary createCallSegmentAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * createCallSegmentAssociation OPERATION ::= {
 *   ARGUMENT  CreateCallSegmentAssociationArg
 *   OPTIONAL  TRUE
 *   RESULT    CreateCallSegmentAssociationResultArg
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE      opcode-createCallSegmentAssociation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CreateCallSegmentAssociationArg, CreateCallSegmentAssociationResultArg>}
 * @implements {OPERATION<CreateCallSegmentAssociationArg, CreateCallSegmentAssociationResultArg>}
 */
export
const createCallSegmentAssociation: OPERATION<CreateCallSegmentAssociationArg, CreateCallSegmentAssociationResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CreateCallSegmentAssociationArg,
        "&ResultType": _decode_CreateCallSegmentAssociationResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_CreateCallSegmentAssociationArg,
        "&ResultType": _encode_CreateCallSegmentAssociationResultArg,
    },
    "&argumentTypeOptional": true /* OBJECT_FIELD_SETTING */,
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
