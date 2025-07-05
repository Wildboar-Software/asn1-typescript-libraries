/* eslint-disable */
import { id_opcode_list } from "../CommonProtocolSpecification/id-opcode-list.va.mjs";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import {
    ListArgument,
    _decode_ListArgument,
    _encode_ListArgument,
} from "../DirectoryAbstractService/ListArgument.ta.mjs";
import {
    ListResult,
    _decode_ListResult,
    _encode_ListResult,
} from "../DirectoryAbstractService/ListResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
/**
 * @summary list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * list OPERATION ::= {
 *   ARGUMENT  ListArgument
 *   RESULT    ListResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-list }
 * ```
 *
 * @constant
 * @type {OPERATION<ListArgument, ListResult>}
 * @implements {OPERATION<ListArgument, ListResult>}
 */
export const list: OPERATION<ListArgument, ListResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ListArgument,
        "&ResultType": _decode_ListResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ListArgument,
        "&ResultType": _encode_ListResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
