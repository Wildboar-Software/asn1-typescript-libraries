/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TCPPort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCPPort  ::=  INTEGER (1..65535)
 * ```
 */
export
type TCPPort = INTEGER;

let _cached_decoder_for_TCPPort: $.ASN1Decoder<TCPPort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCPPort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCPPort (el: _Element): TCPPort {
    if (!_cached_decoder_for_TCPPort) { _cached_decoder_for_TCPPort = $._decodeInteger; }
    return _cached_decoder_for_TCPPort(el);
}

let _cached_encoder_for_TCPPort: $.ASN1Encoder<TCPPort> | null = null;

/**
 * @summary Encodes a(n) TCPPort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPPort, encoded as an ASN.1 Element.
 */
export
function _encode_TCPPort (value: TCPPort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCPPort) { _cached_encoder_for_TCPPort = $._encodeInteger; }
    return _cached_encoder_for_TCPPort(value, elGetter);
}


/* eslint-enable */
