/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortKeySpec_sortRelation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeySpec-sortRelation ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SortKeySpec_sortRelation = INTEGER;

/**
 * @summary SortKeySpec_sortRelation_ascending
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_ascending: SortKeySpec_sortRelation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_ascending
 * @constant
 * @type {number}
 */
export
const ascending: SortKeySpec_sortRelation = SortKeySpec_sortRelation_ascending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descending
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_descending: SortKeySpec_sortRelation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descending
 * @constant
 * @type {number}
 */
export
const descending: SortKeySpec_sortRelation = SortKeySpec_sortRelation_descending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_ascendingByFrequency
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_ascendingByFrequency: SortKeySpec_sortRelation = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_ascendingByFrequency
 * @constant
 * @type {number}
 */
export
const ascendingByFrequency: SortKeySpec_sortRelation = SortKeySpec_sortRelation_ascendingByFrequency; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descendingByfrequency
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_descendingByfrequency: SortKeySpec_sortRelation = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descendingByfrequency
 * @constant
 * @type {number}
 */
export
const descendingByfrequency: SortKeySpec_sortRelation = SortKeySpec_sortRelation_descendingByfrequency; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortKeySpec_sortRelation = $._decodeInteger;
export const _encode_SortKeySpec_sortRelation = $._encodeInteger;


/* eslint-enable */
