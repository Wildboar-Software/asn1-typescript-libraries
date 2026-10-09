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

let _cached_decoder_for_SortKeySpec_caseSensitivity: $.ASN1Decoder<SortKeySpec_caseSensitivity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeySpec_caseSensitivity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeySpec_caseSensitivity (el: _Element): SortKeySpec_caseSensitivity {
    if (!_cached_decoder_for_SortKeySpec_caseSensitivity) { _cached_decoder_for_SortKeySpec_caseSensitivity = $._decodeInteger; }
    return _cached_decoder_for_SortKeySpec_caseSensitivity(el);
}

let _cached_encoder_for_SortKeySpec_caseSensitivity: $.ASN1Encoder<SortKeySpec_caseSensitivity> | null = null;

/**
 * @summary Encodes a(n) SortKeySpec_caseSensitivity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeySpec_caseSensitivity, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeySpec_caseSensitivity (value: SortKeySpec_caseSensitivity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeySpec_caseSensitivity) { _cached_encoder_for_SortKeySpec_caseSensitivity = $._encodeInteger; }
    return _cached_encoder_for_SortKeySpec_caseSensitivity(value, elGetter);
}


/* eslint-enable */
