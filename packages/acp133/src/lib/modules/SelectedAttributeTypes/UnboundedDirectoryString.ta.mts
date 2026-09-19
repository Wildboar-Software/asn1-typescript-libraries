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
 * @summary UnboundedDirectoryString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnboundedDirectoryString  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..MAX)),
 *   printableString  PrintableString(SIZE (1..MAX)),
 *   bmpString        BMPString(SIZE (1..MAX)),
 *   universalString  UniversalString(SIZE (1..MAX)),
 *   uTF8String       UTF8String(SIZE (1..MAX)) }
 * ```
 */
export
type UnboundedDirectoryString =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UnboundedDirectoryString: $.ASN1Decoder<UnboundedDirectoryString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnboundedDirectoryString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnboundedDirectoryString (el: _Element): UnboundedDirectoryString {
    if (!_cached_decoder_for_UnboundedDirectoryString) { _cached_decoder_for_UnboundedDirectoryString = $._decode_inextensible_choice<UnboundedDirectoryString>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "uTF8String", $._decodeUTF8String ]
}); }
    return _cached_decoder_for_UnboundedDirectoryString(el);
}

let _cached_encoder_for_UnboundedDirectoryString: $.ASN1Encoder<UnboundedDirectoryString> | null = null;

/**
 * @summary Encodes a(n) UnboundedDirectoryString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnboundedDirectoryString, encoded as an ASN.1 Element.
 */
export
function _encode_UnboundedDirectoryString (value: UnboundedDirectoryString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnboundedDirectoryString) { _cached_encoder_for_UnboundedDirectoryString = $._encode_choice<UnboundedDirectoryString>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "bmpString": $._encodeBMPString,
    "universalString": $._encodeUniversalString,
    "uTF8String": $._encodeUTF8String,
}, $.BER); }
    return _cached_encoder_for_UnboundedDirectoryString(value, elGetter);
}


/* eslint-enable */
