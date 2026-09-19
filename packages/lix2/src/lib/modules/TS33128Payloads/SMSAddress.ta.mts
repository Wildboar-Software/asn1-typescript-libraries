/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSAddress  ::=  OCTET STRING(SIZE(2..12))
 * ```
 */
export
type SMSAddress = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SMSAddress: $.ASN1Decoder<SMSAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSAddress (el: _Element): SMSAddress {
    if (!_cached_decoder_for_SMSAddress) { _cached_decoder_for_SMSAddress = $._decodeOctetString; }
    return _cached_decoder_for_SMSAddress(el);
}

let _cached_encoder_for_SMSAddress: $.ASN1Encoder<SMSAddress> | null = null;

/**
 * @summary Encodes a(n) SMSAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSAddress, encoded as an ASN.1 Element.
 */
export
function _encode_SMSAddress (value: SMSAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSAddress) { _cached_encoder_for_SMSAddress = $._encodeOctetString; }
    return _cached_encoder_for_SMSAddress(value, elGetter);
}


/* eslint-enable */
