import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IN_ModifyEntryArgument, _decode_IN_ModifyEntryArgument, _encode_IN_ModifyEntryArgument } from "../IN-SCF-SDF-Additional-Definitions/IN-ModifyEntryArgument.ta.mjs";
// export { IN_ModifyEntryArgument, _decode_IN_ModifyEntryArgument, _encode_IN_ModifyEntryArgument } from "../IN-SCF-SDF-Additional-Definitions/IN-ModifyEntryArgument.ta.mjs";
import { IN_ModifyEntryResult, _decode_IN_ModifyEntryResult, _encode_IN_ModifyEntryResult } from "../IN-SCF-SDF-Additional-Definitions/IN-ModifyEntryResult.ta.mjs";
// export { IN_ModifyEntryResult, _decode_IN_ModifyEntryResult, _encode_IN_ModifyEntryResult } from "../IN-SCF-SDF-Additional-Definitions/IN-ModifyEntryResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { in_ServiceError } from "../IN-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
// export { in_ServiceError } from "../IN-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
// export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { id_opcode_modifyEntry } from "../DirectoryAccessProtocol/id-opcode-modifyEntry.va.mjs";
// export { id_opcode_modifyEntry } from "../DirectoryAccessProtocol/id-opcode-modifyEntry.va.mjs";


/**
 * @summary in_ModifyEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-ModifyEntry OPERATION ::= {
 *   ARGUMENT  IN-ModifyEntryArgument
 *   RESULT    IN-ModifyEntryResult
 *   ERRORS
 *     {nameError | in-ServiceError | securityError | attributeError | updateError
 *       | referral}
 *   CODE      id-opcode-modifyEntry
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_ModifyEntryArgument, IN_ModifyEntryResult>}
 * @implements {OPERATION<IN_ModifyEntryArgument, IN_ModifyEntryResult>}
 */
export
const in_ModifyEntry: OPERATION<IN_ModifyEntryArgument, IN_ModifyEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_ModifyEntryArgument,
        "&ResultType": _decode_IN_ModifyEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_ModifyEntryArgument,
        "&ResultType": _encode_IN_ModifyEntryResult,
    },
    "&Errors": [ nameError, in_ServiceError, securityError, attributeError, updateError, referral, ] as unknown as ERROR[] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyEntry as unknown as Code /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
