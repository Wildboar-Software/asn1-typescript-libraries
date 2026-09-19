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
 * @summary X520StateOrProvinceName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520StateOrProvinceName  ::=  CHOICE {
 *       teletexString     TeletexString   (SIZE (1..ub-state-name)),
 *       printableString   PrintableString (SIZE (1..ub-state-name)),
 *       universalString   UniversalString (SIZE (1..ub-state-name)),
 *       utf8String        UTF8String      (SIZE (1..ub-state-name)),
 *       bmpString         BMPString       (SIZE(1..ub-state-name)) }
 * ```
 */
export
type X520StateOrProvinceName =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_X520StateOrProvinceName: $.ASN1Decoder<X520StateOrProvinceName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520StateOrProvinceName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520StateOrProvinceName (el: _Element): X520StateOrProvinceName {
    if (!_cached_decoder_for_X520StateOrProvinceName) { _cached_decoder_for_X520StateOrProvinceName = $._decode_inextensible_choice<X520StateOrProvinceName>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "utf8String", $._decodeUTF8String ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ]
}); }
    return _cached_decoder_for_X520StateOrProvinceName(el);
}

let _cached_encoder_for_X520StateOrProvinceName: $.ASN1Encoder<X520StateOrProvinceName> | null = null;

/**
 * @summary Encodes a(n) X520StateOrProvinceName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520StateOrProvinceName, encoded as an ASN.1 Element.
 */
export
function _encode_X520StateOrProvinceName (value: X520StateOrProvinceName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520StateOrProvinceName) { _cached_encoder_for_X520StateOrProvinceName = $._encode_choice<X520StateOrProvinceName>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "universalString": $._encodeUniversalString,
    "utf8String": $._encodeUTF8String,
    "bmpString": $._encodeBMPString,
}, $.BER); }
    return _cached_encoder_for_X520StateOrProvinceName(value, elGetter);
}


/* eslint-enable */
