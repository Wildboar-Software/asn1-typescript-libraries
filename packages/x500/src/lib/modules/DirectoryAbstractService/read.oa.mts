/* eslint-disable */
import { id_opcode_read } from "../CommonProtocolSpecification/id-opcode-read.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import {
    ReadArgument,
    _decode_ReadArgument,
    _encode_ReadArgument,
} from "../DirectoryAbstractService/ReadArgument.ta.mjs";
import {
    ReadResult,
    _decode_ReadResult,
    _encode_ReadResult,
} from "../DirectoryAbstractService/ReadResult.ta.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
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

/* eslint-enable */
