/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageDigest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageDigest  ::=  OCTET STRING
 * ```
 */
export
type MessageDigest = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MessageDigest: $.ASN1Decoder<MessageDigest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDigest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageDigest (el: _Element): MessageDigest {
    if (!_cached_decoder_for_MessageDigest) { _cached_decoder_for_MessageDigest = $._decodeOctetString; }
    return _cached_decoder_for_MessageDigest(el);
}

let _cached_encoder_for_MessageDigest: $.ASN1Encoder<MessageDigest> | null = null;

/**
 * @summary Encodes a(n) MessageDigest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDigest, encoded as an ASN.1 Element.
 */
export
function _encode_MessageDigest (value: MessageDigest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageDigest) { _cached_encoder_for_MessageDigest = $._encodeOctetString; }
    return _cached_encoder_for_MessageDigest(value, elGetter);
}


/* eslint-enable */
