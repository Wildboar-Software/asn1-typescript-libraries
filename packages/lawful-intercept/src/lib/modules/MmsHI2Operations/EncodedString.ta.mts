/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncodedTextString, _decode_EncodedTextString, _encode_EncodedTextString } from "../MmsHI2Operations/EncodedTextString.ta.mjs";
// export { EncodedTextString, _decode_EncodedTextString, _encode_EncodedTextString } from "../MmsHI2Operations/EncodedTextString.ta.mjs";


/**
 * @summary EncodedString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncodedString ::=  CHOICE
 * {
 *     text    [1] UTF8String,
 *     encodedTextString    [2] EncodedTextString,
 *     ...
 * }
 * ```
 */
export
type EncodedString =
    { text: UTF8String } /* CHOICE_ALT_ROOT */
    | { encodedTextString: EncodedTextString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_EncodedString: $.ASN1Decoder<EncodedString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncodedString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncodedString (el: _Element): EncodedString {
    if (!_cached_decoder_for_EncodedString) { _cached_decoder_for_EncodedString = $._decode_extensible_choice<EncodedString>({
    "CONTEXT 1": [ "text", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "encodedTextString", $._decode_implicit<EncodedTextString>(() => _decode_EncodedTextString) ]
}); }
    return _cached_decoder_for_EncodedString(el);
}

let _cached_encoder_for_EncodedString: $.ASN1Encoder<EncodedString> | null = null;

/**
 * @summary Encodes a(n) EncodedString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedString, encoded as an ASN.1 Element.
 */
export
function _encode_EncodedString (value: EncodedString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncodedString) { _cached_encoder_for_EncodedString = $._encode_choice<EncodedString>({
    "text": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
    "encodedTextString": $._encode_implicit(_TagClass.context, 2, () => _encode_EncodedTextString, $.BER),
}, $.BER); }
    return _cached_encoder_for_EncodedString(value, elGetter);
}


/* eslint-enable */
