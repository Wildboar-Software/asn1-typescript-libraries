/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DelayInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DelayInterval ::=  INTEGER(1..60)
 * ```
 */
export
type DelayInterval = INTEGER;

let _cached_decoder_for_DelayInterval: $.ASN1Decoder<DelayInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DelayInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DelayInterval (el: _Element): DelayInterval {
    if (!_cached_decoder_for_DelayInterval) { _cached_decoder_for_DelayInterval = $._decodeInteger; }
    return _cached_decoder_for_DelayInterval(el);
}

let _cached_encoder_for_DelayInterval: $.ASN1Encoder<DelayInterval> | null = null;

/**
 * @summary Encodes a(n) DelayInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelayInterval, encoded as an ASN.1 Element.
 */
export
function _encode_DelayInterval (value: DelayInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DelayInterval) { _cached_encoder_for_DelayInterval = $._encodeInteger; }
    return _cached_encoder_for_DelayInterval(value, elGetter);
}


/* eslint-enable */
