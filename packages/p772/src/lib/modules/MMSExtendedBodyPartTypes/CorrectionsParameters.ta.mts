/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrectionsParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrectionsParameters  ::=  INTEGER
 * ```
 */
export
type CorrectionsParameters = INTEGER;

let _cached_decoder_for_CorrectionsParameters: $.ASN1Decoder<CorrectionsParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrectionsParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrectionsParameters (el: _Element): CorrectionsParameters {
    if (!_cached_decoder_for_CorrectionsParameters) { _cached_decoder_for_CorrectionsParameters = $._decodeInteger; }
    return _cached_decoder_for_CorrectionsParameters(el);
}

let _cached_encoder_for_CorrectionsParameters: $.ASN1Encoder<CorrectionsParameters> | null = null;

/**
 * @summary Encodes a(n) CorrectionsParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrectionsParameters, encoded as an ASN.1 Element.
 */
export
function _encode_CorrectionsParameters (value: CorrectionsParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrectionsParameters) { _cached_encoder_for_CorrectionsParameters = $._encodeInteger; }
    return _cached_encoder_for_CorrectionsParameters(value, elGetter);
}


/* eslint-enable */
