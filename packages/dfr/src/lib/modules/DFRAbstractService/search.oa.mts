/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SearchArgument, _decode_SearchArgument, _encode_SearchArgument } from "../DFRAbstractService/SearchArgument.ta.mjs";
// export { SearchArgument, _decode_SearchArgument, _encode_SearchArgument } from "../DFRAbstractService/SearchArgument.ta.mjs";
import { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DFRAbstractService/SearchResult.ta.mjs";
// export { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DFRAbstractService/SearchResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { accessError } from "../DFRAbstractService/accessError.oa.mjs";
// export { accessError } from "../DFRAbstractService/accessError.oa.mjs";
import { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
// export { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
// export { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { updateError } from "../DFRAbstractService/updateError.oa.mjs";
// export { updateError } from "../DFRAbstractService/updateError.oa.mjs";
import { id_opcode_search } from "../DFRAbstractService/id-opcode-search.va.mjs";
// export { id_opcode_search } from "../DFRAbstractService/id-opcode-search.va.mjs";


/**
 * @summary search
 * @description
 *
 * Find entries in a domain that satisfy a Filter. Hits may be returned and/or
 * stored in an SRL. `updateError` concerns filling that SRL. External
 * references are never dereferenced. ISO/IEC 10166-1:1991 §8.2.8. Local opcode
 * 8 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * search OPERATION ::= {
 *     ARGUMENT    SearchArgument
 *     RESULT      SearchResult
 *     ERRORS {
 *         abandoned
 *         | accessError
 *         | attributeError
 *         | nameError
 *         | reservationError
 *         | securityError
 *         | serviceError
 *         | updateError -- concerns the searchResultList to be filled
 *     }
 *     CODE        id-opcode-search
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
    "&Errors": [ abandoned, accessError, attributeError, nameError, reservationError, securityError, serviceError, updateError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_search /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
