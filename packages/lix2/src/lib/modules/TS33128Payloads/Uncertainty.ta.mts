/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uncertainty  ::=  INTEGER (0..127)
 * ```
 */
export
type Uncertainty = INTEGER;

let _cached_decoder_for_Uncertainty: $.ASN1Decoder<Uncertainty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Uncertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Uncertainty (el: _Element): Uncertainty {
    if (!_cached_decoder_for_Uncertainty) { _cached_decoder_for_Uncertainty = $._decodeInteger; }
    return _cached_decoder_for_Uncertainty(el);
}

let _cached_encoder_for_Uncertainty: $.ASN1Encoder<Uncertainty> | null = null;

/**
 * @summary Encodes a(n) Uncertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Uncertainty, encoded as an ASN.1 Element.
 */
export
function _encode_Uncertainty (value: Uncertainty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Uncertainty) { _cached_encoder_for_Uncertainty = $._encodeInteger; }
    return _cached_encoder_for_Uncertainty(value, elGetter);
}


/* eslint-enable */
