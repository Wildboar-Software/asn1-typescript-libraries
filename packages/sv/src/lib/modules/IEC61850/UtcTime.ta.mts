/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UtcTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtcTime  ::=  OCTET STRING
 * ```
 */
export
type UtcTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UtcTime: $.ASN1Decoder<UtcTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UtcTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UtcTime (el: _Element): UtcTime {
    if (!_cached_decoder_for_UtcTime) { _cached_decoder_for_UtcTime = $._decodeOctetString; }
    return _cached_decoder_for_UtcTime(el);
}

let _cached_encoder_for_UtcTime: $.ASN1Encoder<UtcTime> | null = null;

/**
 * @summary Encodes a(n) UtcTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtcTime, encoded as an ASN.1 Element.
 */
export
function _encode_UtcTime (value: UtcTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UtcTime) { _cached_encoder_for_UtcTime = $._encodeOctetString; }
    return _cached_encoder_for_UtcTime(value, elGetter);
}


/* eslint-enable */
