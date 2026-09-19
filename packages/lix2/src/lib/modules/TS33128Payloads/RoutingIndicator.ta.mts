/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingIndicator  ::=  INTEGER (0..9999)
 * ```
 */
export
type RoutingIndicator = INTEGER;

let _cached_decoder_for_RoutingIndicator: $.ASN1Decoder<RoutingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingIndicator (el: _Element): RoutingIndicator {
    if (!_cached_decoder_for_RoutingIndicator) { _cached_decoder_for_RoutingIndicator = $._decodeInteger; }
    return _cached_decoder_for_RoutingIndicator(el);
}

let _cached_encoder_for_RoutingIndicator: $.ASN1Encoder<RoutingIndicator> | null = null;

/**
 * @summary Encodes a(n) RoutingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingIndicator (value: RoutingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingIndicator) { _cached_encoder_for_RoutingIndicator = $._encodeInteger; }
    return _cached_encoder_for_RoutingIndicator(value, elGetter);
}


/* eslint-enable */
