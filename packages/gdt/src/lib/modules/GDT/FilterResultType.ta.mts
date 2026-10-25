/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FilterResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilterResultType  ::=  INTEGER {
 *     frt-accept  (1),  -- ACCEPT
 *     frt-drop    (2)   -- DROP
 * }
 * ```
 */
export
type FilterResultType = INTEGER;

/**
 * @summary FilterResultType_frt_accept
 * @constant
 * @type {number}
 */
export
const FilterResultType_frt_accept = 1 satisfies FilterResultType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterResultType_frt_accept
 * @constant
 * @type {number}
 */
export
const frt_accept = FilterResultType_frt_accept satisfies FilterResultType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FilterResultType_frt_drop
 * @constant
 * @type {number}
 */
export
const FilterResultType_frt_drop = 2 satisfies FilterResultType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterResultType_frt_drop
 * @constant
 * @type {number}
 */
export
const frt_drop = FilterResultType_frt_drop satisfies FilterResultType; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FilterResultType = $._decodeInteger;
export const _encode_FilterResultType = $._encodeInteger;


/* eslint-enable */
