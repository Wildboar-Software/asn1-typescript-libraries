/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMATimeDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeDuration  ::=  OCTET STRING(SIZE(8))
 * ```
 */
export
type AMATimeDuration = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AMATimeDuration: $.ASN1Decoder<AMATimeDuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMATimeDuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMATimeDuration (el: _Element): AMATimeDuration {
    if (!_cached_decoder_for_AMATimeDuration) { _cached_decoder_for_AMATimeDuration = $._decodeOctetString; }
    return _cached_decoder_for_AMATimeDuration(el);
}

let _cached_encoder_for_AMATimeDuration: $.ASN1Encoder<AMATimeDuration> | null = null;

/**
 * @summary Encodes a(n) AMATimeDuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMATimeDuration, encoded as an ASN.1 Element.
 */
export
function _encode_AMATimeDuration (value: AMATimeDuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMATimeDuration) { _cached_encoder_for_AMATimeDuration = $._encodeOctetString; }
    return _cached_encoder_for_AMATimeDuration(value, elGetter);
}


/* eslint-enable */
