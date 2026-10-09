/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortKeySpec_caseSensitivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeySpec-caseSensitivity ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SortKeySpec_caseSensitivity = INTEGER;

/**
 * @summary SortKeySpec_caseSensitivity_caseSensitive
 * @constant
 * @type {number}
 */
export
const SortKeySpec_caseSensitivity_caseSensitive: SortKeySpec_caseSensitivity = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_caseSensitivity_caseSensitive
 * @constant
 * @type {number}
 */
export
const caseSensitive: SortKeySpec_caseSensitivity = SortKeySpec_caseSensitivity_caseSensitive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_caseSensitivity_caseInsensitive
 * @constant
 * @type {number}
 */
export
const SortKeySpec_caseSensitivity_caseInsensitive: SortKeySpec_caseSensitivity = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_caseSensitivity_caseInsensitive
 * @constant
 * @type {number}
 */
export
const caseInsensitive: SortKeySpec_caseSensitivity = SortKeySpec_caseSensitivity_caseInsensitive; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortKeySpec_caseSensitivity = $._decodeInteger;
export const _encode_SortKeySpec_caseSensitivity = $._encodeInteger;


/* eslint-enable */
