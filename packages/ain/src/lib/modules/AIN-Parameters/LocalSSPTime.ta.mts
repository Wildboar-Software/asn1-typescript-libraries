/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocalSSPTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalSSPTime  ::=  OCTET STRING(SIZE(7))
 * ```
 */
export
type LocalSSPTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_LocalSSPTime: $.ASN1Decoder<LocalSSPTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalSSPTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalSSPTime (el: _Element): LocalSSPTime {
    if (!_cached_decoder_for_LocalSSPTime) { _cached_decoder_for_LocalSSPTime = $._decodeOctetString; }
    return _cached_decoder_for_LocalSSPTime(el);
}

let _cached_encoder_for_LocalSSPTime: $.ASN1Encoder<LocalSSPTime> | null = null;

/**
 * @summary Encodes a(n) LocalSSPTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalSSPTime, encoded as an ASN.1 Element.
 */
export
function _encode_LocalSSPTime (value: LocalSSPTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalSSPTime) { _cached_encoder_for_LocalSSPTime = $._encodeOctetString; }
    return _cached_encoder_for_LocalSSPTime(value, elGetter);
}


/* eslint-enable */
