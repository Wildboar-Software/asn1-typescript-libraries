/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeoutPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutPeriod                  ::=    INTEGER (1 .. 600)
 * ```
 */
export
type TimeoutPeriod = INTEGER;

let _cached_decoder_for_TimeoutPeriod: $.ASN1Decoder<TimeoutPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeoutPeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeoutPeriod (el: _Element): TimeoutPeriod {
    if (!_cached_decoder_for_TimeoutPeriod) { _cached_decoder_for_TimeoutPeriod = $._decodeInteger; }
    return _cached_decoder_for_TimeoutPeriod(el);
}

let _cached_encoder_for_TimeoutPeriod: $.ASN1Encoder<TimeoutPeriod> | null = null;

/**
 * @summary Encodes a(n) TimeoutPeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeoutPeriod, encoded as an ASN.1 Element.
 */
export
function _encode_TimeoutPeriod (value: TimeoutPeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeoutPeriod) { _cached_encoder_for_TimeoutPeriod = $._encodeInteger; }
    return _cached_encoder_for_TimeoutPeriod(value, elGetter);
}


/* eslint-enable */
