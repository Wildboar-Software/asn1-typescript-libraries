/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDPPort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDPPort  ::=  INTEGER (0..65535)
 * ```
 */
export
type UDPPort = INTEGER;

let _cached_decoder_for_UDPPort: $.ASN1Decoder<UDPPort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDPPort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDPPort (el: _Element): UDPPort {
    if (!_cached_decoder_for_UDPPort) { _cached_decoder_for_UDPPort = $._decodeInteger; }
    return _cached_decoder_for_UDPPort(el);
}

let _cached_encoder_for_UDPPort: $.ASN1Encoder<UDPPort> | null = null;

/**
 * @summary Encodes a(n) UDPPort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPPort, encoded as an ASN.1 Element.
 */
export
function _encode_UDPPort (value: UDPPort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDPPort) { _cached_encoder_for_UDPPort = $._encodeInteger; }
    return _cached_encoder_for_UDPPort(value, elGetter);
}


/* eslint-enable */
