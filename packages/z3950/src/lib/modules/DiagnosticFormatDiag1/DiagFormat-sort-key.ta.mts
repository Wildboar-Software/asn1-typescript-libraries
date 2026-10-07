/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_sort_key
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort-key ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_sort_key = INTEGER;

/**
 * @summary DiagFormat_sort_key_tooMany
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_key_tooMany: DiagFormat_sort_key = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_tooMany
 * @constant
 * @type {number}
 */
export
const tooMany: DiagFormat_sort_key = DiagFormat_sort_key_tooMany; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_duplicate
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_key_duplicate: DiagFormat_sort_key = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_duplicate
 * @constant
 * @type {number}
 */
export
const duplicate: DiagFormat_sort_key = DiagFormat_sort_key_duplicate; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_sort_key = $._decodeInteger;
export const _encode_DiagFormat_sort_key = $._encodeInteger;


/* eslint-enable */
