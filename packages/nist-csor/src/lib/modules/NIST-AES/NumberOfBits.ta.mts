/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfBits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfBits  ::=  INTEGER(1..128)
 * ```
 */
export
type NumberOfBits = INTEGER;

let _cached_decoder_for_NumberOfBits: $.ASN1Decoder<NumberOfBits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfBits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfBits (el: _Element): NumberOfBits {
    if (!_cached_decoder_for_NumberOfBits) { _cached_decoder_for_NumberOfBits = $._decodeInteger; }
    return _cached_decoder_for_NumberOfBits(el);
}

let _cached_encoder_for_NumberOfBits: $.ASN1Encoder<NumberOfBits> | null = null;

/**
 * @summary Encodes a(n) NumberOfBits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfBits, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfBits (value: NumberOfBits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfBits) { _cached_encoder_for_NumberOfBits = $._encodeInteger; }
    return _cached_encoder_for_NumberOfBits(value, elGetter);
}


/* eslint-enable */
