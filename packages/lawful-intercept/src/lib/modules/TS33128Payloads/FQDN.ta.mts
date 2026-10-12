/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FQDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FQDN  ::=  UTF8String
 * ```
 */
export
type FQDN = UTF8String; // UTF8String

let _cached_decoder_for_FQDN: $.ASN1Decoder<FQDN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FQDN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FQDN (el: _Element): FQDN {
    if (!_cached_decoder_for_FQDN) { _cached_decoder_for_FQDN = $._decodeUTF8String; }
    return _cached_decoder_for_FQDN(el);
}

let _cached_encoder_for_FQDN: $.ASN1Encoder<FQDN> | null = null;

/**
 * @summary Encodes a(n) FQDN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FQDN, encoded as an ASN.1 Element.
 */
export
function _encode_FQDN (value: FQDN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FQDN) { _cached_encoder_for_FQDN = $._encodeUTF8String; }
    return _cached_encoder_for_FQDN(value, elGetter);
}


/* eslint-enable */
