/* eslint-disable */
import { id_opcode_search } from "../CommonProtocolSpecification/id-opcode-search.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.js";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
import { nameError } from "../DirectoryAbstractService/nameError.oa.js";
import { referral } from "../DirectoryAbstractService/referral.oa.js";
import {
    SearchArgument,
    _decode_SearchArgument,
    _encode_SearchArgument,
} from "../DirectoryAbstractService/SearchArgument.ta.js";
import {
    SearchResult,
    _decode_SearchResult,
    _encode_SearchResult,
} from "../DirectoryAbstractService/SearchResult.ta.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_search } from "../CommonProtocolSpecification/id-opcode-search.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa.js";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export {
    SearchArgument,
    _decode_SearchArgument,
    _encode_SearchArgument,
} from "../DirectoryAbstractService/SearchArgument.ta.js";
export {
    SearchResult,
    _decode_SearchResult,
    _encode_SearchResult,
} from "../DirectoryAbstractService/SearchResult.ta.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";

/* START_OF_SYMBOL_DEFINITION search */
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
/* END_OF_SYMBOL_DEFINITION search */

/* eslint-enable */
