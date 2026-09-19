/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AbsoluteSCPTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsoluteSCPTime  ::=  OCTET STRING(SIZE(7))
 * ```
 */
export
type AbsoluteSCPTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AbsoluteSCPTime: $.ASN1Decoder<AbsoluteSCPTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbsoluteSCPTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbsoluteSCPTime (el: _Element): AbsoluteSCPTime {
    if (!_cached_decoder_for_AbsoluteSCPTime) { _cached_decoder_for_AbsoluteSCPTime = $._decodeOctetString; }
    return _cached_decoder_for_AbsoluteSCPTime(el);
}

let _cached_encoder_for_AbsoluteSCPTime: $.ASN1Encoder<AbsoluteSCPTime> | null = null;

/**
 * @summary Encodes a(n) AbsoluteSCPTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsoluteSCPTime, encoded as an ASN.1 Element.
 */
export
function _encode_AbsoluteSCPTime (value: AbsoluteSCPTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbsoluteSCPTime) { _cached_encoder_for_AbsoluteSCPTime = $._encodeOctetString; }
    return _cached_encoder_for_AbsoluteSCPTime(value, elGetter);
}


/* eslint-enable */
