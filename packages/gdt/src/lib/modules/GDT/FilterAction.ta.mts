/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FilterAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilterAction  ::=  INTEGER {
 *     fa-filter-request   (0),
 *     fa-filter-result    (1)
 * }
 * ```
 */
export
type FilterAction = INTEGER;

/**
 * @summary FilterAction_fa_filter_request
 * @constant
 * @type {number}
 */
export
const FilterAction_fa_filter_request = 0 satisfies FilterAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterAction_fa_filter_request
 * @constant
 * @type {number}
 */
export
const fa_filter_request = FilterAction_fa_filter_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FilterAction_fa_filter_result
 * @constant
 * @type {number}
 */
export
const FilterAction_fa_filter_result = 1 satisfies FilterAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterAction_fa_filter_result
 * @constant
 * @type {number}
 */
export
const fa_filter_result = FilterAction_fa_filter_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FilterAction = $._decodeInteger;
export const _encode_FilterAction = $._encodeInteger;


/* eslint-enable */
