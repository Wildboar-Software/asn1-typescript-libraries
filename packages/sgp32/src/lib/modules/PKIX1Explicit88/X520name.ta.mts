/* eslint-disable */
import {
    ASN1Element as _Element,
    BMPString,
    PrintableString,
    TeletexString,
    UniversalString,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520name  ::=  CHOICE {
 *       teletexString     TeletexString   (SIZE (1..ub-name)),
 *       printableString   PrintableString (SIZE (1..ub-name)),
 *       universalString   UniversalString (SIZE (1..ub-name)),
 *       utf8String        UTF8String      (SIZE (1..ub-name)),
 *       bmpString         BMPString       (SIZE (1..ub-name)) }
 * ```
 */
export
type X520name =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_X520name: $.ASN1Decoder<X520name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520name (el: _Element): X520name {
    if (!_cached_decoder_for_X520name) { _cached_decoder_for_X520name = $._decode_inextensible_choice<X520name>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "utf8String", $._decodeUTF8String ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ]
}); }
    return _cached_decoder_for_X520name(el);
}

let _cached_encoder_for_X520name: $.ASN1Encoder<X520name> | null = null;

/**
 * @summary Encodes a(n) X520name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520name, encoded as an ASN.1 Element.
 */
export
function _encode_X520name (value: X520name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520name) { _cached_encoder_for_X520name = $._encode_choice<X520name>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "universalString": $._encodeUniversalString,
    "utf8String": $._encodeUTF8String,
    "bmpString": $._encodeBMPString,
}, $.BER); }
    return _cached_encoder_for_X520name(value, elGetter);
}


/* eslint-enable */
