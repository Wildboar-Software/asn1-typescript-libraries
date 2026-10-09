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

let _cached_decoder_for_SortKeySpec_sortRelation: $.ASN1Decoder<SortKeySpec_sortRelation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeySpec_sortRelation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeySpec_sortRelation (el: _Element): SortKeySpec_sortRelation {
    if (!_cached_decoder_for_SortKeySpec_sortRelation) { _cached_decoder_for_SortKeySpec_sortRelation = $._decodeInteger; }
    return _cached_decoder_for_SortKeySpec_sortRelation(el);
}

let _cached_encoder_for_SortKeySpec_sortRelation: $.ASN1Encoder<SortKeySpec_sortRelation> | null = null;

/**
 * @summary Encodes a(n) SortKeySpec_sortRelation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeySpec_sortRelation, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeySpec_sortRelation (value: SortKeySpec_sortRelation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeySpec_sortRelation) { _cached_encoder_for_SortKeySpec_sortRelation = $._encodeInteger; }
    return _cached_encoder_for_SortKeySpec_sortRelation(value, elGetter);
}


/* eslint-enable */
