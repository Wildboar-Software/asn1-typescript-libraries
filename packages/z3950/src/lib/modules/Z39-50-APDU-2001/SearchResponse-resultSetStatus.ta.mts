/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SearchResponse_resultSetStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResponse-resultSetStatus ::= INTEGER {
 *     subset (1),
 *     interim (2),
 *     none (3)
 * }
 * ```
 */
export
type SearchResponse_resultSetStatus = INTEGER;

/**
 * @summary SearchResponse_resultSetStatus_subset
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_subset: SearchResponse_resultSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_subset
 * @constant
 * @type {number}
 */
export
const subset: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_interim: SearchResponse_resultSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const interim: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_none: SearchResponse_resultSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const none: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_none; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SearchResponse_resultSetStatus = $._decodeInteger;
export const _encode_SearchResponse_resultSetStatus = $._encodeInteger;


/* eslint-enable */
