/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationIndicator  ::=  INTEGER((-128..127))
 * ```
 */
export
type ReservationIndicator = INTEGER;

let _cached_decoder_for_ReservationIndicator: $.ASN1Decoder<ReservationIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReservationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReservationIndicator (el: _Element): ReservationIndicator {
    if (!_cached_decoder_for_ReservationIndicator) { _cached_decoder_for_ReservationIndicator = $._decodeInteger; }
    return _cached_decoder_for_ReservationIndicator(el);
}

let _cached_encoder_for_ReservationIndicator: $.ASN1Encoder<ReservationIndicator> | null = null;

/**
 * @summary Encodes a(n) ReservationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReservationIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_ReservationIndicator (value: ReservationIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReservationIndicator) { _cached_encoder_for_ReservationIndicator = $._encodeInteger; }
    return _cached_encoder_for_ReservationIndicator(value, elGetter);
}


/* eslint-enable */
