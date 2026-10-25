/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ListEimResult_listEimError
 * @description
 * 
 * Error alternative of `ListEimResult`. SGP.32 v1.2 section 2.11.2.1 names
 * only `undefinedError(127)` and does not further define the condition that
 * produces it. Annex C lists the name only.
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
 * @description
 * SGP.32 v1.2 section 2.11.2.1 names `undefinedError(127)` as the only
 * `listEim` error and does not further define the condition that produces it.
 * Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const ListEimResult_listEimError_undefinedError: 127 = 127 satisfies ListEimResult_listEimError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ListEimResult_listEimError_undefinedError
 * @description
 * SGP.32 v1.2 section 2.11.2.1 names this `listEim` error and does not further
 * define the condition. Annex C.
 * @constant
 * @type {number}
 */
export
const undefinedError: 127 = ListEimResult_listEimError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ListEimResult_listEimError: $.ASN1Decoder<ListEimResult_listEimError> = $._decodeInteger;
export const _encode_ListEimResult_listEimError: $.ASN1Encoder<ListEimResult_listEimError> = $._encodeInteger;


/* eslint-enable */
