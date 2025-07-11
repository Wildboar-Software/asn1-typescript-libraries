/* eslint-disable */
import { id_opcode_compare } from "../CommonProtocolSpecification/id-opcode-compare.va.mjs";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import {
    CompareArgument,
    _decode_CompareArgument,
    _encode_CompareArgument,
} from "../DirectoryAbstractService/CompareArgument.ta.mjs";
import {
    CompareResult,
    _decode_CompareResult,
    _encode_CompareResult,
} from "../DirectoryAbstractService/CompareResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
/**
 * @summary compare
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * compare OPERATION ::= {
 *   ARGUMENT  CompareArgument
 *   RESULT    CompareResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-compare }
 * ```
 *
 * @constant
 * @type {OPERATION<CompareArgument, CompareResult>}
 * @implements {OPERATION<CompareArgument, CompareResult>}
 */
export const compare: OPERATION<CompareArgument, CompareResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CompareArgument,
        "&ResultType": _decode_CompareResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CompareArgument,
        "&ResultType": _encode_CompareResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_compare /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
