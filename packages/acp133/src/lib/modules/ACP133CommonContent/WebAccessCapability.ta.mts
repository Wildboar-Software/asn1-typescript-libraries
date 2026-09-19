/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WebAccessCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WebAccessCapability  ::=  BOOLEAN
 * ```
 */
export
type WebAccessCapability = BOOLEAN; // BooleanType

let _cached_decoder_for_WebAccessCapability: $.ASN1Decoder<WebAccessCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WebAccessCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WebAccessCapability (el: _Element): WebAccessCapability {
    if (!_cached_decoder_for_WebAccessCapability) { _cached_decoder_for_WebAccessCapability = $._decodeBoolean; }
    return _cached_decoder_for_WebAccessCapability(el);
}

let _cached_encoder_for_WebAccessCapability: $.ASN1Encoder<WebAccessCapability> | null = null;

/**
 * @summary Encodes a(n) WebAccessCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WebAccessCapability, encoded as an ASN.1 Element.
 */
export
function _encode_WebAccessCapability (value: WebAccessCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WebAccessCapability) { _cached_encoder_for_WebAccessCapability = $._encodeBoolean; }
    return _cached_encoder_for_WebAccessCapability(value, elGetter);
}


/* eslint-enable */
