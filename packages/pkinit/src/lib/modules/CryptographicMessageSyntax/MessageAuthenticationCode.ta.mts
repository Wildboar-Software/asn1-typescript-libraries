/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageAuthenticationCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageAuthenticationCode  ::=  OCTET STRING
 * ```
 */
export
type MessageAuthenticationCode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MessageAuthenticationCode: $.ASN1Decoder<MessageAuthenticationCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageAuthenticationCode (el: _Element): MessageAuthenticationCode {
    if (!_cached_decoder_for_MessageAuthenticationCode) { _cached_decoder_for_MessageAuthenticationCode = $._decodeOctetString; }
    return _cached_decoder_for_MessageAuthenticationCode(el);
}

let _cached_encoder_for_MessageAuthenticationCode: $.ASN1Encoder<MessageAuthenticationCode> | null = null;

/**
 * @summary Encodes a(n) MessageAuthenticationCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCode, encoded as an ASN.1 Element.
 */
export
function _encode_MessageAuthenticationCode (value: MessageAuthenticationCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageAuthenticationCode) { _cached_encoder_for_MessageAuthenticationCode = $._encodeOctetString; }
    return _cached_encoder_for_MessageAuthenticationCode(value, elGetter);
}


/* eslint-enable */
