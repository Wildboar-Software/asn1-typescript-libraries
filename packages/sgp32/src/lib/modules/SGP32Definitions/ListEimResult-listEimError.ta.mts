/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ListEimResult_listEimError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListEimResult-listEimError ::= INTEGER {
 *     undefinedError(127)
 * }
 * ```
 */
export
type ListEimResult_listEimError = INTEGER;

/**
 * @summary ListEimResult_listEimError_undefinedError
 * @constant
 * @type {number}
 */
export
const ListEimResult_listEimError_undefinedError: ListEimResult_listEimError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ListEimResult_listEimError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ListEimResult_listEimError = ListEimResult_listEimError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ListEimResult_listEimError: $.ASN1Decoder<ListEimResult_listEimError> = $._decodeInteger;
export const _encode_ListEimResult_listEimError: $.ASN1Encoder<ListEimResult_listEimError> = $._encodeInteger;


/* eslint-enable */
