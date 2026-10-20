import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IN_AddEntryArgument, _decode_IN_AddEntryArgument, _encode_IN_AddEntryArgument } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-AddEntryArgument.ta.mjs";
// export { IN_AddEntryArgument, _decode_IN_AddEntryArgument, _encode_IN_AddEntryArgument } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-AddEntryArgument.ta.mjs";
import { AddEntryResult, _decode_AddEntryResult, _encode_AddEntryResult } from "../DirectoryAbstractService/AddEntryResult.ta.mjs";
// export { AddEntryResult, _decode_AddEntryResult, _encode_AddEntryResult } from "../DirectoryAbstractService/AddEntryResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { in_ServiceError } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
// export { in_ServiceError } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { id_opcode_addEntry } from "../DirectoryAccessProtocol/id-opcode-addEntry.va.mjs";
// export { id_opcode_addEntry } from "../DirectoryAccessProtocol/id-opcode-addEntry.va.mjs";


/**
 * @summary in_AddEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-AddEntry OPERATION ::= {
 *   ARGUMENT  IN-AddEntryArgument
 *   RESULT    AddEntryResult
 *   ERRORS
 *     {nameError | in-ServiceError | securityError | attributeError | updateError
 *       | referral}
 *   CODE      id-opcode-addEntry
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_AddEntryArgument, AddEntryResult>}
 * @implements {OPERATION<IN_AddEntryArgument, AddEntryResult>}
 */
export
const in_AddEntry: OPERATION<IN_AddEntryArgument, AddEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_AddEntryArgument,
        "&ResultType": _decode_AddEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_AddEntryArgument,
        "&ResultType": _encode_AddEntryResult,
    },
    "&Errors": [ nameError, in_ServiceError, securityError, attributeError, updateError, referral, ] as unknown as ERROR[] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_addEntry as unknown as Code /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
