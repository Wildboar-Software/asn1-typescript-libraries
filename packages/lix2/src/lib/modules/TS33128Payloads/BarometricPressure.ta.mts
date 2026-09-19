/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BarometricPressure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BarometricPressure  ::=  INTEGER (30000..115000)
 * ```
 */
export
type BarometricPressure = INTEGER;

let _cached_decoder_for_BarometricPressure: $.ASN1Decoder<BarometricPressure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BarometricPressure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BarometricPressure (el: _Element): BarometricPressure {
    if (!_cached_decoder_for_BarometricPressure) { _cached_decoder_for_BarometricPressure = $._decodeInteger; }
    return _cached_decoder_for_BarometricPressure(el);
}

let _cached_encoder_for_BarometricPressure: $.ASN1Encoder<BarometricPressure> | null = null;

/**
 * @summary Encodes a(n) BarometricPressure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BarometricPressure, encoded as an ASN.1 Element.
 */
export
function _encode_BarometricPressure (value: BarometricPressure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BarometricPressure) { _cached_encoder_for_BarometricPressure = $._encodeInteger; }
    return _cached_encoder_for_BarometricPressure(value, elGetter);
}


/* eslint-enable */
