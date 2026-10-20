/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { RemoveEntryArgument, _decode_RemoveEntryArgument, _encode_RemoveEntryArgument } from "../DirectoryAbstractService/RemoveEntryArgument.ta.mjs";
// export { RemoveEntryArgument, _decode_RemoveEntryArgument, _encode_RemoveEntryArgument } from "../DirectoryAbstractService/RemoveEntryArgument.ta.mjs";
import { RemoveEntryResult, _decode_RemoveEntryResult, _encode_RemoveEntryResult } from "../DirectoryAbstractService/RemoveEntryResult.ta.mjs";
// export { RemoveEntryResult, _decode_RemoveEntryResult, _encode_RemoveEntryResult } from "../DirectoryAbstractService/RemoveEntryResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { id_opcode_removeEntry } from "../DirectoryAccessProtocol/id-opcode-removeEntry.va.mjs";
// export { id_opcode_removeEntry } from "../DirectoryAccessProtocol/id-opcode-removeEntry.va.mjs";


/**
 * @summary removeEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * removeEntry OPERATION ::= {
 *   ARGUMENT  RemoveEntryArgument
 *   RESULT    RemoveEntryResult
 *   ERRORS    {nameError | serviceError | referral | securityError | updateError}
 *   CODE      id-opcode-removeEntry
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<RemoveEntryArgument, RemoveEntryResult>}
 * @implements {OPERATION<RemoveEntryArgument, RemoveEntryResult>}
 */
export
const removeEntry: OPERATION<RemoveEntryArgument, RemoveEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RemoveEntryArgument,
        "&ResultType": _decode_RemoveEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RemoveEntryArgument,
        "&ResultType": _encode_RemoveEntryResult,
    },
    "&Errors": [ nameError, serviceError, referral, securityError, updateError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_removeEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
