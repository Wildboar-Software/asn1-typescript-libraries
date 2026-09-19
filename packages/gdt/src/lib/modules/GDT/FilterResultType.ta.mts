/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const FilterResultType_frt_accept: FilterResultType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterResultType_frt_accept
 * @constant
 * @type {number}
 */
export
const frt_accept: FilterResultType = FilterResultType_frt_accept; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FilterResultType_frt_drop
 * @constant
 * @type {number}
 */
export
const FilterResultType_frt_drop: FilterResultType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FilterResultType_frt_drop
 * @constant
 * @type {number}
 */
export
const frt_drop: FilterResultType = FilterResultType_frt_drop; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FilterResultType: $.ASN1Decoder<FilterResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilterResultType (el: _Element): FilterResultType {
    if (!_cached_decoder_for_FilterResultType) { _cached_decoder_for_FilterResultType = $._decodeInteger; }
    return _cached_decoder_for_FilterResultType(el);
}

let _cached_encoder_for_FilterResultType: $.ASN1Encoder<FilterResultType> | null = null;

/**
 * @summary Encodes a(n) FilterResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterResultType, encoded as an ASN.1 Element.
 */
export
function _encode_FilterResultType (value: FilterResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilterResultType) { _cached_encoder_for_FilterResultType = $._encodeInteger; }
    return _cached_encoder_for_FilterResultType(value, elGetter);
}


/* eslint-enable */
