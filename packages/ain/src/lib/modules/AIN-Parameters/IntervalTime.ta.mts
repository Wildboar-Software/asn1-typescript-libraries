/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntervalTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntervalTime  ::=   INTEGER(1..86400)
 * ```
 */
export
type IntervalTime = INTEGER;

let _cached_decoder_for_IntervalTime: $.ASN1Decoder<IntervalTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntervalTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntervalTime (el: _Element): IntervalTime {
    if (!_cached_decoder_for_IntervalTime) { _cached_decoder_for_IntervalTime = $._decodeInteger; }
    return _cached_decoder_for_IntervalTime(el);
}

let _cached_encoder_for_IntervalTime: $.ASN1Encoder<IntervalTime> | null = null;

/**
 * @summary Encodes a(n) IntervalTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalTime, encoded as an ASN.1 Element.
 */
export
function _encode_IntervalTime (value: IntervalTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntervalTime) { _cached_encoder_for_IntervalTime = $._encodeInteger; }
    return _cached_encoder_for_IntervalTime(value, elGetter);
}


/* eslint-enable */
