/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaxMessageSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxMessageSize  ::=  INTEGER
 * ```
 */
export
type MaxMessageSize = INTEGER;

let _cached_decoder_for_MaxMessageSize: $.ASN1Decoder<MaxMessageSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxMessageSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaxMessageSize (el: _Element): MaxMessageSize {
    if (!_cached_decoder_for_MaxMessageSize) { _cached_decoder_for_MaxMessageSize = $._decodeInteger; }
    return _cached_decoder_for_MaxMessageSize(el);
}

let _cached_encoder_for_MaxMessageSize: $.ASN1Encoder<MaxMessageSize> | null = null;

/**
 * @summary Encodes a(n) MaxMessageSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxMessageSize, encoded as an ASN.1 Element.
 */
export
function _encode_MaxMessageSize (value: MaxMessageSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaxMessageSize) { _cached_encoder_for_MaxMessageSize = $._encodeInteger; }
    return _cached_encoder_for_MaxMessageSize(value, elGetter);
}


/* eslint-enable */
