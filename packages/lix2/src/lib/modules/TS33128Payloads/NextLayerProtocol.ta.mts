/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NextLayerProtocol  ::=  INTEGER(0..255)
 * ```
 */
export
type NextLayerProtocol = INTEGER;

let _cached_decoder_for_NextLayerProtocol: $.ASN1Decoder<NextLayerProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NextLayerProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NextLayerProtocol (el: _Element): NextLayerProtocol {
    if (!_cached_decoder_for_NextLayerProtocol) { _cached_decoder_for_NextLayerProtocol = $._decodeInteger; }
    return _cached_decoder_for_NextLayerProtocol(el);
}

let _cached_encoder_for_NextLayerProtocol: $.ASN1Encoder<NextLayerProtocol> | null = null;

/**
 * @summary Encodes a(n) NextLayerProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NextLayerProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_NextLayerProtocol (value: NextLayerProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NextLayerProtocol) { _cached_encoder_for_NextLayerProtocol = $._encodeInteger; }
    return _cached_encoder_for_NextLayerProtocol(value, elGetter);
}


/* eslint-enable */
