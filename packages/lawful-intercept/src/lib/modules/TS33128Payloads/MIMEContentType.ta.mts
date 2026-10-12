/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MIMEContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIMEContentType  ::=  UTF8String
 * ```
 */
export
type MIMEContentType = UTF8String; // UTF8String

let _cached_decoder_for_MIMEContentType: $.ASN1Decoder<MIMEContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIMEContentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIMEContentType (el: _Element): MIMEContentType {
    if (!_cached_decoder_for_MIMEContentType) { _cached_decoder_for_MIMEContentType = $._decodeUTF8String; }
    return _cached_decoder_for_MIMEContentType(el);
}

let _cached_encoder_for_MIMEContentType: $.ASN1Encoder<MIMEContentType> | null = null;

/**
 * @summary Encodes a(n) MIMEContentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIMEContentType, encoded as an ASN.1 Element.
 */
export
function _encode_MIMEContentType (value: MIMEContentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIMEContentType) { _cached_encoder_for_MIMEContentType = $._encodeUTF8String; }
    return _cached_encoder_for_MIMEContentType(value, elGetter);
}


/* eslint-enable */
