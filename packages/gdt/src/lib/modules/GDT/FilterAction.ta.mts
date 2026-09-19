/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const FilterAction_fa_filter_request: FilterAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterAction_fa_filter_request
 * @constant
 * @type {number}
 */
export
const fa_filter_request: FilterAction = FilterAction_fa_filter_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FilterAction_fa_filter_result
 * @constant
 * @type {number}
 */
export
const FilterAction_fa_filter_result: FilterAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterAction_fa_filter_result
 * @constant
 * @type {number}
 */
export
const fa_filter_result: FilterAction = FilterAction_fa_filter_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FilterAction: $.ASN1Decoder<FilterAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilterAction (el: _Element): FilterAction {
    if (!_cached_decoder_for_FilterAction) { _cached_decoder_for_FilterAction = $._decodeInteger; }
    return _cached_decoder_for_FilterAction(el);
}

let _cached_encoder_for_FilterAction: $.ASN1Encoder<FilterAction> | null = null;

/**
 * @summary Encodes a(n) FilterAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterAction, encoded as an ASN.1 Element.
 */
export
function _encode_FilterAction (value: FilterAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilterAction) { _cached_encoder_for_FilterAction = $._encodeInteger; }
    return _cached_encoder_for_FilterAction(value, elGetter);
}


/* eslint-enable */
