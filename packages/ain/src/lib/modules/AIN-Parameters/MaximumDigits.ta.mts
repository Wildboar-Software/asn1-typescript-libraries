/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaximumDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaximumDigits  ::=  INTEGER(0..255)
 * ```
 */
export
type MaximumDigits = INTEGER;

let _cached_decoder_for_MaximumDigits: $.ASN1Decoder<MaximumDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaximumDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaximumDigits (el: _Element): MaximumDigits {
    if (!_cached_decoder_for_MaximumDigits) { _cached_decoder_for_MaximumDigits = $._decodeInteger; }
    return _cached_decoder_for_MaximumDigits(el);
}

let _cached_encoder_for_MaximumDigits: $.ASN1Encoder<MaximumDigits> | null = null;

/**
 * @summary Encodes a(n) MaximumDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaximumDigits, encoded as an ASN.1 Element.
 */
export
function _encode_MaximumDigits (value: MaximumDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaximumDigits) { _cached_encoder_for_MaximumDigits = $._encodeInteger; }
    return _cached_encoder_for_MaximumDigits(value, elGetter);
}


/* eslint-enable */
