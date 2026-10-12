/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUI64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUI64  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type EUI64 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EUI64: $.ASN1Decoder<EUI64> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUI64
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUI64 (el: _Element): EUI64 {
    if (!_cached_decoder_for_EUI64) { _cached_decoder_for_EUI64 = $._decodeOctetString; }
    return _cached_decoder_for_EUI64(el);
}

let _cached_encoder_for_EUI64: $.ASN1Encoder<EUI64> | null = null;

/**
 * @summary Encodes a(n) EUI64 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUI64, encoded as an ASN.1 Element.
 */
export
function _encode_EUI64 (value: EUI64, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUI64) { _cached_encoder_for_EUI64 = $._encodeOctetString; }
    return _cached_encoder_for_EUI64(value, elGetter);
}


/* eslint-enable */
