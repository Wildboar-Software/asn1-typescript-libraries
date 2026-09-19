/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveQI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveQI  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveQI = INTEGER;

let _cached_decoder_for_FiveQI: $.ASN1Decoder<FiveQI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveQI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveQI (el: _Element): FiveQI {
    if (!_cached_decoder_for_FiveQI) { _cached_decoder_for_FiveQI = $._decodeInteger; }
    return _cached_decoder_for_FiveQI(el);
}

let _cached_encoder_for_FiveQI: $.ASN1Encoder<FiveQI> | null = null;

/**
 * @summary Encodes a(n) FiveQI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveQI, encoded as an ASN.1 Element.
 */
export
function _encode_FiveQI (value: FiveQI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveQI) { _cached_encoder_for_FiveQI = $._encodeInteger; }
    return _cached_encoder_for_FiveQI(value, elGetter);
}


/* eslint-enable */
