/* eslint-disable */
import {
    ASN1Element as _Element,
    BMPString,
    PrintableString,
    TeletexString,
    UniversalString,
    UTF8String,
} from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";

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
export type UnboundedDirectoryString =
    | { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;

const _cached_decoder_for_UnboundedDirectoryString: $.ASN1Decoder<UnboundedDirectoryString> =
    $._decode_inextensible_choice<UnboundedDirectoryString>({
        "UNIVERSAL 20": ["teletexString", $._decodeTeletexString],
        "UNIVERSAL 19": ["printableString", $._decodePrintableString],
        "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
        "UNIVERSAL 28": ["universalString", $._decodeUniversalString],
        "UNIVERSAL 12": ["uTF8String", $._decodeUTF8String],
    });

/**
 * @summary Decodes an ASN.1 element into a(n) UnboundedDirectoryString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnboundedDirectoryString} The decoded data structure.
 */
export function _decode_UnboundedDirectoryString(el: _Element): UnboundedDirectoryString {
    return _cached_decoder_for_UnboundedDirectoryString(el);
}

const _cached_encoder_for_UnboundedDirectoryString: $.ASN1Encoder<UnboundedDirectoryString> =
    $._encode_choice<UnboundedDirectoryString>(
        {
            teletexString: $._encodeTeletexString,
            printableString: $._encodePrintableString,
            bmpString: $._encodeBMPString,
            universalString: $._encodeUniversalString,
            uTF8String: $._encodeUTF8String,
        },
        $.BER
    );

/**
 * @summary Encodes a(n) UnboundedDirectoryString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnboundedDirectoryString, encoded as an ASN.1 Element.
 */
export function _encode_UnboundedDirectoryString(value: UnboundedDirectoryString, elGetter: $.ASN1Encoder<UnboundedDirectoryString>): UnboundedDirectoryString {
    return _cached_encoder_for_UnboundedDirectoryString(value, elGetter);
}


/* eslint-enable */
