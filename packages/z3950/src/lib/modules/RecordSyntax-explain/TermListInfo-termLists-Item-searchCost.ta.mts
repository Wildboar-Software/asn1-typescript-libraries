/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermListInfo_termLists_Item_searchCost
 * @description
 * How expensive a search is when it uses the attributes associated with a term
 * list. To learn the attribute combination, retrieve the TermListDetails
 * record. ANSI/NISO Z39.50-2003 §3.2.10.3.7; ASN.1 comment 6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListInfo-termLists-Item-searchCost ::= INTEGER {
 *     -- see comment 6
 *     optimized (0),
 *     normal (1),
 *     expensive (2),
 *     filter (3)
 * }
 * ```
 */
export
type TermListInfo_termLists_Item_searchCost = INTEGER;

/**
 * @summary TermListInfo_termLists_Item_searchCost_optimized
 * @description
 * The associated attribute or combination will do fast searches. ANSI/NISO
 * Z39.50-2003 §3.2.10.3.7; ASN.1 comment 6.
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_optimized: TermListInfo_termLists_Item_searchCost = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_optimized
 * @description
 * Short name for `TermListInfo_termLists_Item_searchCost_optimized`.
 * @constant
 * @type {number}
 */
export
const optimized: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_optimized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_normal
 * @description
 * The associated attribute or combination will work as expected. There is
 * probably an index, or some similar mechanism. ANSI/NISO Z39.50-2003
 * §3.2.10.3.7; ASN.1 comment 6.
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_normal: TermListInfo_termLists_Item_searchCost = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_normal
 * @description
 * Short name for `TermListInfo_termLists_Item_searchCost_normal`.
 * @constant
 * @type {number}
 */
export
const normal: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_expensive
 * @description
 * The attribute or combination can be used, but it might not give satisfactory
 * results. There is probably no index, or records must be post-processed.
 * ANSI/NISO Z39.50-2003 §3.2.10.3.7; ASN.1 comment 6.
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_expensive: TermListInfo_termLists_Item_searchCost = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_expensive
 * @description
 * Short name for `TermListInfo_termLists_Item_searchCost_expensive`.
 * @constant
 * @type {number}
 */
export
const expensive: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_expensive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_filter
 * @description
 * Cannot search with this attribute or combination alone. ANSI/NISO Z39.50-2003
 * §3.2.10.3.7; ASN.1 comment 6.
 * @constant
 * @type {number}
 */
export
const TermListInfo_termLists_Item_searchCost_filter: TermListInfo_termLists_Item_searchCost = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermListInfo_termLists_Item_searchCost_filter
 * @description
 * Short name for `TermListInfo_termLists_Item_searchCost_filter`.
 * @constant
 * @type {number}
 */
export
const filter: TermListInfo_termLists_Item_searchCost = TermListInfo_termLists_Item_searchCost_filter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TermListInfo_termLists_Item_searchCost: $.ASN1Decoder<TermListInfo_termLists_Item_searchCost> = $._decodeInteger;
export const _encode_TermListInfo_termLists_Item_searchCost: $.ASN1Encoder<TermListInfo_termLists_Item_searchCost> = $._encodeInteger;


/* eslint-enable */
