/* eslint-disable */
import { id_opcode_search } from "../CommonProtocolSpecification/id-opcode-search.va.mjs";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import {
    SearchArgument,
    _decode_SearchArgument,
    _encode_SearchArgument,
} from "../DirectoryAbstractService/SearchArgument.ta.mjs";
import {
    SearchResult,
    _decode_SearchResult,
    _encode_SearchResult,
} from "../DirectoryAbstractService/SearchResult.ta.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
/**
 * @summary search
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * search OPERATION ::= {
 *   ARGUMENT  SearchArgument
 *   RESULT    SearchResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-search }
 * ```
 *
 * @constant
 * @type {OPERATION<SearchArgument, SearchResult>}
 * @implements {OPERATION<SearchArgument, SearchResult>}
 */
export const search: OPERATION<SearchArgument, SearchResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SearchArgument,
        "&ResultType": _decode_SearchResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SearchArgument,
        "&ResultType": _encode_SearchResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_search /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
