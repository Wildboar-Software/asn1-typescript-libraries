/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ModifyEntryArgument, _decode_ModifyEntryArgument, _encode_ModifyEntryArgument } from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";
// export { ModifyEntryArgument, _decode_ModifyEntryArgument, _encode_ModifyEntryArgument } from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";
import { ModifyEntryResult, _decode_ModifyEntryResult, _encode_ModifyEntryResult } from "../DirectoryAbstractService/ModifyEntryResult.ta.mjs";
// export { ModifyEntryResult, _decode_ModifyEntryResult, _encode_ModifyEntryResult } from "../DirectoryAbstractService/ModifyEntryResult.ta.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
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
import { id_opcode_modifyEntry } from "../DirectoryAccessProtocol/id-opcode-modifyEntry.va.mjs";
// export { id_opcode_modifyEntry } from "../DirectoryAccessProtocol/id-opcode-modifyEntry.va.mjs";


/**
 * @summary modifyEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * modifyEntry OPERATION ::= {
 *   ARGUMENT  ModifyEntryArgument
 *   RESULT    ModifyEntryResult
 *   ERRORS
 *     {attributeError | nameError | serviceError | referral | securityError |
 *       updateError}
 *   CODE      id-opcode-modifyEntry
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ModifyEntryArgument, ModifyEntryResult>}
 * @implements {OPERATION<ModifyEntryArgument, ModifyEntryResult>}
 */
export
const modifyEntry: OPERATION<ModifyEntryArgument, ModifyEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyEntryArgument,
        "&ResultType": _decode_ModifyEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyEntryArgument,
        "&ResultType": _encode_ModifyEntryResult,
    },
    "&Errors": [ attributeError, nameError, serviceError, referral, securityError, updateError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
