/* eslint-disable */
import { id_opcode_read } from "../CommonProtocolSpecification/id-opcode-read.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.js";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
import { nameError } from "../DirectoryAbstractService/nameError.oa.js";
import {
    ReadArgument,
    _decode_ReadArgument,
    _encode_ReadArgument,
} from "../DirectoryAbstractService/ReadArgument.ta.js";
import {
    ReadResult,
    _decode_ReadResult,
    _encode_ReadResult,
} from "../DirectoryAbstractService/ReadResult.ta.js";
import { referral } from "../DirectoryAbstractService/referral.oa.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_read } from "../CommonProtocolSpecification/id-opcode-read.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa.js";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export {
    ReadArgument,
    _decode_ReadArgument,
    _encode_ReadArgument,
} from "../DirectoryAbstractService/ReadArgument.ta.js";
export {
    ReadResult,
    _decode_ReadResult,
    _encode_ReadResult,
} from "../DirectoryAbstractService/ReadResult.ta.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";

/* START_OF_SYMBOL_DEFINITION read */
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
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-read }
 * ```
 *
 * @constant
 * @type {OPERATION<ReadArgument, ReadResult>}
 * @implements {OPERATION<ReadArgument, ReadResult>}
 */
export const read: OPERATION<ReadArgument, ReadResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReadArgument,
        "&ResultType": _decode_ReadResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReadArgument,
        "&ResultType": _encode_ReadResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_read /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION read */

/* eslint-enable */
