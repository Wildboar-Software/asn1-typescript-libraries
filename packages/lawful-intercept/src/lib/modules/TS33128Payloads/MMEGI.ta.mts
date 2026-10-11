/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEGI  ::=  NumericString
 * ```
 */
export
type MMEGI = NumericString; // NumericString

let _cached_decoder_for_MMEGI: $.ASN1Decoder<MMEGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEGI (el: _Element): MMEGI {
    if (!_cached_decoder_for_MMEGI) { _cached_decoder_for_MMEGI = $._decodeNumericString; }
    return _cached_decoder_for_MMEGI(el);
}

let _cached_encoder_for_MMEGI: $.ASN1Encoder<MMEGI> | null = null;

/**
 * @summary Encodes a(n) MMEGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEGI, encoded as an ASN.1 Element.
 */
export
function _encode_MMEGI (value: MMEGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEGI) { _cached_encoder_for_MMEGI = $._encodeNumericString; }
    return _cached_encoder_for_MMEGI(value, elGetter);
}


/* eslint-enable */
