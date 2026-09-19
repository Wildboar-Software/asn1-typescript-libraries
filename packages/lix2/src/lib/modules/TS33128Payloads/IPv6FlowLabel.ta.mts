/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6FlowLabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6FlowLabel  ::=  INTEGER(0..1048575)
 * ```
 */
export
type IPv6FlowLabel = INTEGER;

let _cached_decoder_for_IPv6FlowLabel: $.ASN1Decoder<IPv6FlowLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv6FlowLabel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv6FlowLabel (el: _Element): IPv6FlowLabel {
    if (!_cached_decoder_for_IPv6FlowLabel) { _cached_decoder_for_IPv6FlowLabel = $._decodeInteger; }
    return _cached_decoder_for_IPv6FlowLabel(el);
}

let _cached_encoder_for_IPv6FlowLabel: $.ASN1Encoder<IPv6FlowLabel> | null = null;

/**
 * @summary Encodes a(n) IPv6FlowLabel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv6FlowLabel, encoded as an ASN.1 Element.
 */
export
function _encode_IPv6FlowLabel (value: IPv6FlowLabel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv6FlowLabel) { _cached_encoder_for_IPv6FlowLabel = $._encodeInteger; }
    return _cached_encoder_for_IPv6FlowLabel(value, elGetter);
}


/* eslint-enable */
