/* eslint-disable */
import {
    ASN1Element as _Element,
    BMPString,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary String
 * @description
 *
 * Text of a mailbox identifier or a password (ECMA-347
 * §7.3.1). A BMP string or a UTF-8 string. §7.3.1 does not
 * say which to send. The procedures call the mailbox value
 * an identifier, for example a name, and the authentication
 * value a password (§7.5.1.1.2, §7.5.2.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * String  ::=  CHOICE {
 *     stringBmp BMPString,
 *     stringUtf8 UTF8String
 * }
 * ```
 */
export
type String =
    { stringBmp: BMPString } /* CHOICE_ALT_ROOT */
    | { stringUtf8: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_String: $.ASN1Decoder<String> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) String
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_String (el: _Element): String {
    if (!_cached_decoder_for_String) { _cached_decoder_for_String = $._decode_inextensible_choice<String>({
    "UNIVERSAL 30": [ "stringBmp", $._decodeBMPString ],
    "UNIVERSAL 12": [ "stringUtf8", $._decodeUTF8String ]
}); }
    return _cached_decoder_for_String(el);
}

let _cached_encoder_for_String: $.ASN1Encoder<String> | null = null;

/**
 * @summary Encodes a(n) String into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The String, encoded as an ASN.1 Element.
 */
export
function _encode_String (value: String, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_String) { _cached_encoder_for_String = $._encode_choice<String>({
    "stringBmp": $._encodeBMPString,
    "stringUtf8": $._encodeUTF8String,
}, $.BER); }
    return _cached_encoder_for_String(value, elGetter);
}

/* eslint-enable */
