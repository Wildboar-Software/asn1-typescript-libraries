import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IN_RemoveEntryArgument, _decode_IN_RemoveEntryArgument, _encode_IN_RemoveEntryArgument } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-RemoveEntryArgument.ta.mjs";
// export { IN_RemoveEntryArgument, _decode_IN_RemoveEntryArgument, _encode_IN_RemoveEntryArgument } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-RemoveEntryArgument.ta.mjs";
import { RemoveEntryResult, _decode_RemoveEntryResult, _encode_RemoveEntryResult } from "../DirectoryAbstractService/RemoveEntryResult.ta.mjs";
// export { RemoveEntryResult, _decode_RemoveEntryResult, _encode_RemoveEntryResult } from "../DirectoryAbstractService/RemoveEntryResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { in_ServiceError } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
// export { in_ServiceError } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { id_opcode_removeEntry } from "../DirectoryAccessProtocol/id-opcode-removeEntry.va.mjs";
// export { id_opcode_removeEntry } from "../DirectoryAccessProtocol/id-opcode-removeEntry.va.mjs";


/**
 * @summary in_RemoveEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-RemoveEntry OPERATION ::= {
 *   ARGUMENT  IN-RemoveEntryArgument
 *   RESULT    RemoveEntryResult
 *   ERRORS
 *     {nameError | in-ServiceError | securityError | updateError | referral}
 *   CODE      id-opcode-removeEntry
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_RemoveEntryArgument, RemoveEntryResult>}
 * @implements {OPERATION<IN_RemoveEntryArgument, RemoveEntryResult>}
 */
export
const in_RemoveEntry: OPERATION<IN_RemoveEntryArgument, RemoveEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_RemoveEntryArgument,
        "&ResultType": _decode_RemoveEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_RemoveEntryArgument,
        "&ResultType": _encode_RemoveEntryResult,
    },
    "&Errors": [ nameError, in_ServiceError, securityError, updateError, referral, ] as unknown as ERROR[] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_removeEntry as unknown as Code /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
