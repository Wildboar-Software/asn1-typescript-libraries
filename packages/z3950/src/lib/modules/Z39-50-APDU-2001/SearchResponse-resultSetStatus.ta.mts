/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SearchResponse_resultSetStatus
 * @description
 *
 * Supplied on a Search response if and only if the search failed.
 * Tells the client whether a usable partial result set exists.
 * `subset` and `interim` mean a result set exists; `none` means it
 * does not. §3.2.2.1.11.
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
 * @description
 *
 * Value 1. Partial, valid results are available. The result set
 * exists. Occurs only when the search failed. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_subset: SearchResponse_resultSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_subset
 * @description
 *
 * Short name for `SearchResponse_resultSetStatus_subset`. Value 1:
 * partial, valid results available. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const subset: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_interim
 * @description
 *
 * Value 2. Partial results are available, not necessarily valid. The
 * result set exists. Occurs only when the search failed.
 * §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_interim: SearchResponse_resultSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_interim
 * @description
 *
 * Short name for `SearchResponse_resultSetStatus_interim`. Value 2:
 * partial results, not necessarily valid. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const interim: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_none
 * @description
 *
 * Value 3. No result set. Occurs only when the search failed.
 * §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_none: SearchResponse_resultSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_none
 * @description
 *
 * Short name for `SearchResponse_resultSetStatus_none`. Value 3: no
 * result set. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const none: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_none; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SearchResponse_resultSetStatus = $._decodeInteger;
export const _encode_SearchResponse_resultSetStatus = $._encodeInteger;


/* eslint-enable */
