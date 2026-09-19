/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorText  ::=  IA5String
 * ```
 */
export
type ErrorText = IA5String; // IA5String

let _cached_decoder_for_ErrorText: $.ASN1Decoder<ErrorText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorText (el: _Element): ErrorText {
    if (!_cached_decoder_for_ErrorText) { _cached_decoder_for_ErrorText = $._decodeIA5String; }
    return _cached_decoder_for_ErrorText(el);
}

let _cached_encoder_for_ErrorText: $.ASN1Encoder<ErrorText> | null = null;

/**
 * @summary Encodes a(n) ErrorText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorText, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorText (value: ErrorText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorText) { _cached_encoder_for_ErrorText = $._encodeIA5String; }
    return _cached_encoder_for_ErrorText(value, elGetter);
}


/* eslint-enable */
