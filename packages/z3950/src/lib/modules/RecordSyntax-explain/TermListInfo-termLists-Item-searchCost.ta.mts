/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermListInfo_termLists_Item_searchCost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListInfo-termLists-Item-searchCost ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TermListInfo_termLists_Item_searchCost = INTEGER;

/**
 * @summary TermListInfo_termLists_Item_searchCost_optimized
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_optimized: TermListInfo_termLists_Item_searchCost = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_optimized
 * @constant
 * @type {number}
 */
export
const optimized: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_optimized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_normal
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_normal: TermListInfo_termLists_Item_searchCost = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_normal
 * @constant
 * @type {number}
 */
export
const normal: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_expensive
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_expensive: TermListInfo_termLists_Item_searchCost = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_expensive
 * @constant
 * @type {number}
 */
export
const expensive: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_expensive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_filter
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_filter: TermListInfo_termLists_Item_searchCost = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_filter
 * @constant
 * @type {number}
 */
export
const filter: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_filter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TermListInfo_termLists_Item_searchCost = $._decodeInteger;
export const _encode_TermListInfo_termLists_Item_searchCost = $._encodeInteger;


/* eslint-enable */
