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

let _cached_decoder_for_TermListInfo_termLists_Item_searchCost: $.ASN1Decoder<TermListInfo_termLists_Item_searchCost> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListInfo_termLists_Item_searchCost
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListInfo_termLists_Item_searchCost (el: _Element): TermListInfo_termLists_Item_searchCost {
    if (!_cached_decoder_for_TermListInfo_termLists_Item_searchCost) { _cached_decoder_for_TermListInfo_termLists_Item_searchCost = $._decodeInteger; }
    return _cached_decoder_for_TermListInfo_termLists_Item_searchCost(el);
}

let _cached_encoder_for_TermListInfo_termLists_Item_searchCost: $.ASN1Encoder<TermListInfo_termLists_Item_searchCost> | null = null;

/**
 * @summary Encodes a(n) TermListInfo_termLists_Item_searchCost into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListInfo_termLists_Item_searchCost, encoded as an ASN.1 Element.
 */
export
function _encode_TermListInfo_termLists_Item_searchCost (value: TermListInfo_termLists_Item_searchCost, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListInfo_termLists_Item_searchCost) { _cached_encoder_for_TermListInfo_termLists_Item_searchCost = $._encodeInteger; }
    return _cached_encoder_for_TermListInfo_termLists_Item_searchCost(value, elGetter);
}


/* eslint-enable */
