/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortResponse_sortStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortResponse-sortStatus ::= INTEGER {
 *     success (0),
 *     partial-1 (1),
 *     failure (2)
 * }
 * ```
 */
export
type SortResponse_sortStatus = INTEGER;

/**
 * @summary SortResponse_sortStatus_success
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_success: SortResponse_sortStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_success
 * @constant
 * @type {number}
 */
export
const success: SortResponse_sortStatus = SortResponse_sortStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_partial_1
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_partial_1: SortResponse_sortStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_partial_1
 * @constant
 * @type {number}
 */
export
const partial_1: SortResponse_sortStatus = SortResponse_sortStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_failure
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_failure: SortResponse_sortStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: SortResponse_sortStatus = SortResponse_sortStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortResponse_sortStatus = $._decodeInteger;
export const _encode_SortResponse_sortStatus = $._encodeInteger;


/* eslint-enable */
