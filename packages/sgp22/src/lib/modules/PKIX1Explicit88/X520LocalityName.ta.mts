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
 * @summary X520LocalityName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520LocalityName  ::=  CHOICE {
 *       teletexString     TeletexString   (SIZE (1..ub-locality-name)),
 *       printableString   PrintableString (SIZE (1..ub-locality-name)),
 *       universalString   UniversalString (SIZE (1..ub-locality-name)),
 *       utf8String        UTF8String      (SIZE (1..ub-locality-name)),
 *       bmpString         BMPString       (SIZE (1..ub-locality-name)) }
 * ```
 */
export
type X520LocalityName =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_X520LocalityName: $.ASN1Decoder<X520LocalityName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520LocalityName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520LocalityName (el: _Element): X520LocalityName {
    if (!_cached_decoder_for_X520LocalityName) { _cached_decoder_for_X520LocalityName = $._decode_inextensible_choice<X520LocalityName>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "utf8String", $._decodeUTF8String ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ]
}); }
    return _cached_decoder_for_X520LocalityName(el);
}

let _cached_encoder_for_X520LocalityName: $.ASN1Encoder<X520LocalityName> | null = null;

/**
 * @summary Encodes a(n) X520LocalityName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520LocalityName, encoded as an ASN.1 Element.
 */
export
function _encode_X520LocalityName (value: X520LocalityName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520LocalityName) { _cached_encoder_for_X520LocalityName = $._encode_choice<X520LocalityName>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "universalString": $._encodeUniversalString,
    "utf8String": $._encodeUTF8String,
    "bmpString": $._encodeBMPString,
}, $.BER); }
    return _cached_encoder_for_X520LocalityName(value, elGetter);
}


/* eslint-enable */
