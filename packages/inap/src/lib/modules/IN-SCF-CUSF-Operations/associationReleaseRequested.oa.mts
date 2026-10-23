/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AssociationReleaseRequestedArg, _decode_AssociationReleaseRequestedArg, _encode_AssociationReleaseRequestedArg } from "../IN-SCF-CUSF-Operations/AssociationReleaseRequestedArg.ta.mjs";
// export { AssociationReleaseRequestedArg, _decode_AssociationReleaseRequestedArg, _encode_AssociationReleaseRequestedArg } from "../IN-SCF-CUSF-Operations/AssociationReleaseRequestedArg.ta.mjs";
import { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
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
import { unknownLegID } from "../IN-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-errortypes/unknownLegID.oa.mjs";
import { opcode_associationReleaseRequested } from "../IN-operationcodes/opcode-associationReleaseRequested.va.mjs";
// export { opcode_associationReleaseRequested } from "../IN-operationcodes/opcode-associationReleaseRequested.va.mjs";


/**
 * @summary associationReleaseRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * associationReleaseRequested OPERATION ::= {
 *   ARGUMENT         AssociationReleaseRequestedArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | parameterOutOfRange |
 *       systemFailure | taskRefused | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter | unknownLegID}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-associationReleaseRequested
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AssociationReleaseRequestedArg>}
 * @implements {OPERATION<AssociationReleaseRequestedArg>}
 */
export
const associationReleaseRequested: OPERATION<AssociationReleaseRequestedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AssociationReleaseRequestedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AssociationReleaseRequestedArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_associationReleaseRequested /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
