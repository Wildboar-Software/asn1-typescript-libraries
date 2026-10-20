/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SearchArgument, _decode_SearchArgument, _encode_SearchArgument } from "../DirectoryAbstractService/SearchArgument.ta.mjs";
// export { SearchArgument, _decode_SearchArgument, _encode_SearchArgument } from "../DirectoryAbstractService/SearchArgument.ta.mjs";
import { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DirectoryAbstractService/SearchResult.ta.mjs";
// export { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DirectoryAbstractService/SearchResult.ta.mjs";
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
import { id_opcode_search } from "../DirectoryAccessProtocol/id-opcode-search.va.mjs";
// export { id_opcode_search } from "../DirectoryAccessProtocol/id-opcode-search.va.mjs";


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
 *   ERRORS
 *     {attributeError | nameError | serviceError | referral | abandoned |
 *       securityError}
 *   CODE      id-opcode-search
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SearchArgument, SearchResult>}
 * @implements {OPERATION<SearchArgument, SearchResult>}
 */
export
const search: OPERATION<SearchArgument, SearchResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SearchArgument,
        "&ResultType": _decode_SearchResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SearchArgument,
        "&ResultType": _encode_SearchResult,
    },
    "&Errors": [ attributeError, nameError, serviceError, referral, abandoned, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_search /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
