/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACAddress  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type MACAddress = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MACAddress: $.ASN1Decoder<MACAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MACAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MACAddress (el: _Element): MACAddress {
    if (!_cached_decoder_for_MACAddress) { _cached_decoder_for_MACAddress = $._decodeOctetString; }
    return _cached_decoder_for_MACAddress(el);
}

let _cached_encoder_for_MACAddress: $.ASN1Encoder<MACAddress> | null = null;

/**
 * @summary Encodes a(n) MACAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MACAddress, encoded as an ASN.1 Element.
 */
export
function _encode_MACAddress (value: MACAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MACAddress) { _cached_encoder_for_MACAddress = $._encodeOctetString; }
    return _cached_encoder_for_MACAddress(value, elGetter);
}


/* eslint-enable */
