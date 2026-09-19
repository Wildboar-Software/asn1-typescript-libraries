/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AP_invocation_identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AP-invocation-identifier  ::=  INTEGER
 * ```
 */
export
type AP_invocation_identifier = INTEGER;

let _cached_decoder_for_AP_invocation_identifier: $.ASN1Decoder<AP_invocation_identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AP_invocation_identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AP_invocation_identifier (el: _Element): AP_invocation_identifier {
    if (!_cached_decoder_for_AP_invocation_identifier) { _cached_decoder_for_AP_invocation_identifier = $._decodeInteger; }
    return _cached_decoder_for_AP_invocation_identifier(el);
}

let _cached_encoder_for_AP_invocation_identifier: $.ASN1Encoder<AP_invocation_identifier> | null = null;

/**
 * @summary Encodes a(n) AP_invocation_identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_invocation_identifier, encoded as an ASN.1 Element.
 */
export
function _encode_AP_invocation_identifier (value: AP_invocation_identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AP_invocation_identifier) { _cached_encoder_for_AP_invocation_identifier = $._encodeInteger; }
    return _cached_encoder_for_AP_invocation_identifier(value, elGetter);
}


/* eslint-enable */
