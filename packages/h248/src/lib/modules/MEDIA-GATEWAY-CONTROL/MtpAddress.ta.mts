/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MtpAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MtpAddress  ::=  OCTET STRING(SIZE(2..4))
 * ```
 */
export
type MtpAddress = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MtpAddress: $.ASN1Decoder<MtpAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MtpAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MtpAddress (el: _Element): MtpAddress {
    if (!_cached_decoder_for_MtpAddress) { _cached_decoder_for_MtpAddress = $._decodeOctetString; }
    return _cached_decoder_for_MtpAddress(el);
}

let _cached_encoder_for_MtpAddress: $.ASN1Encoder<MtpAddress> | null = null;

/**
 * @summary Encodes a(n) MtpAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MtpAddress, encoded as an ASN.1 Element.
 */
export
function _encode_MtpAddress (value: MtpAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MtpAddress) { _cached_encoder_for_MtpAddress = $._encodeOctetString; }
    return _cached_encoder_for_MtpAddress(value, elGetter);
}


/* eslint-enable */
