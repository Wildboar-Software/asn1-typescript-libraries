import { type Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type IN_SearchArgument, _decode_IN_SearchArgument, _encode_IN_SearchArgument } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-SearchArgument.ta.mjs";
// export { IN_SearchArgument, _decode_IN_SearchArgument, _encode_IN_SearchArgument } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-SearchArgument.ta.mjs";
import { type IN_SearchResult, _decode_IN_SearchResult, _encode_IN_SearchResult } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-SearchResult.ta.mjs";
// export { IN_SearchResult, _decode_IN_SearchResult, _encode_IN_SearchResult } from "../IN-CS3-SCF-SDF-Additional-Definitions/IN-SearchResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
// export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { in_ServiceError } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
// export { in_ServiceError } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-ServiceError.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
// export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { id_opcode_search } from "../DirectoryAccessProtocol/id-opcode-search.va.mjs";
// export { id_opcode_search } from "../DirectoryAccessProtocol/id-opcode-search.va.mjs";


/**
 * @summary in_Search
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-Search OPERATION ::= {
 *   ARGUMENT  IN-SearchArgument
 *   RESULT    IN-SearchResult
 *   ERRORS
 *     {nameError | in-ServiceError | securityError | attributeError | referral}
 *   CODE      id-opcode-search
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<IN_SearchArgument, IN_SearchResult>}
 * @implements {OPERATION<IN_SearchArgument, IN_SearchResult>}
 */
export
const in_Search: OPERATION<IN_SearchArgument, IN_SearchResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IN_SearchArgument,
        "&ResultType": _decode_IN_SearchResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IN_SearchArgument,
        "&ResultType": _encode_IN_SearchResult,
    },
    "&Errors": [ nameError, in_ServiceError, securityError, attributeError, referral, ] /* OBJECT_FIELD_SETTING */,
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
