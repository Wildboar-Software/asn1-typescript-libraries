/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFErrorCodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFErrorCodes  ::=  UTF8String
 * ```
 */
export
type SMFErrorCodes = UTF8String; // UTF8String

let _cached_decoder_for_SMFErrorCodes: $.ASN1Decoder<SMFErrorCodes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFErrorCodes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFErrorCodes (el: _Element): SMFErrorCodes {
    if (!_cached_decoder_for_SMFErrorCodes) { _cached_decoder_for_SMFErrorCodes = $._decodeUTF8String; }
    return _cached_decoder_for_SMFErrorCodes(el);
}

let _cached_encoder_for_SMFErrorCodes: $.ASN1Encoder<SMFErrorCodes> | null = null;

/**
 * @summary Encodes a(n) SMFErrorCodes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFErrorCodes, encoded as an ASN.1 Element.
 */
export
function _encode_SMFErrorCodes (value: SMFErrorCodes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFErrorCodes) { _cached_encoder_for_SMFErrorCodes = $._encodeUTF8String; }
    return _cached_encoder_for_SMFErrorCodes(value, elGetter);
}


/* eslint-enable */
