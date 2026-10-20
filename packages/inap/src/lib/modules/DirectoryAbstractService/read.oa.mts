/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReadArgument, _decode_ReadArgument, _encode_ReadArgument } from "../DirectoryAbstractService/ReadArgument.ta.mjs";
// export { ReadArgument, _decode_ReadArgument, _encode_ReadArgument } from "../DirectoryAbstractService/ReadArgument.ta.mjs";
import { ReadResult, _decode_ReadResult, _encode_ReadResult } from "../DirectoryAbstractService/ReadResult.ta.mjs";
// export { ReadResult, _decode_ReadResult, _encode_ReadResult } from "../DirectoryAbstractService/ReadResult.ta.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { id_opcode_read } from "../DirectoryAccessProtocol/id-opcode-read.va.mjs";
// export { id_opcode_read } from "../DirectoryAccessProtocol/id-opcode-read.va.mjs";


/**
 * @summary read
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * read OPERATION ::= {
 *   ARGUMENT  ReadArgument
 *   RESULT    ReadResult
 *   ERRORS
 *     {attributeError | nameError | serviceError | referral | abandoned |
 *       securityError}
 *   CODE      id-opcode-read
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReadArgument, ReadResult>}
 * @implements {OPERATION<ReadArgument, ReadResult>}
 */
export
const read: OPERATION<ReadArgument, ReadResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReadArgument,
        "&ResultType": _decode_ReadResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReadArgument,
        "&ResultType": _encode_ReadResult,
    },
    "&Errors": [ attributeError, nameError, serviceError, referral, abandoned, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_read /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
