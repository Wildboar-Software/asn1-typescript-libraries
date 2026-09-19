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
 * @summary X520OrganizationalUnitName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520OrganizationalUnitName  ::=  CHOICE {
 *       teletexString     TeletexString
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       printableString   PrintableString
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       universalString   UniversalString
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       utf8String        UTF8String
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       bmpString         BMPString
 *                           (SIZE (1..ub-organizational-unit-name)) }
 * ```
 */
export
type X520OrganizationalUnitName =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_X520OrganizationalUnitName: $.ASN1Decoder<X520OrganizationalUnitName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationalUnitName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520OrganizationalUnitName (el: _Element): X520OrganizationalUnitName {
    if (!_cached_decoder_for_X520OrganizationalUnitName) { _cached_decoder_for_X520OrganizationalUnitName = $._decode_inextensible_choice<X520OrganizationalUnitName>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "utf8String", $._decodeUTF8String ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ]
}); }
    return _cached_decoder_for_X520OrganizationalUnitName(el);
}

let _cached_encoder_for_X520OrganizationalUnitName: $.ASN1Encoder<X520OrganizationalUnitName> | null = null;

/**
 * @summary Encodes a(n) X520OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export
function _encode_X520OrganizationalUnitName (value: X520OrganizationalUnitName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520OrganizationalUnitName) { _cached_encoder_for_X520OrganizationalUnitName = $._encode_choice<X520OrganizationalUnitName>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "universalString": $._encodeUniversalString,
    "utf8String": $._encodeUTF8String,
    "bmpString": $._encodeBMPString,
}, $.BER); }
    return _cached_encoder_for_X520OrganizationalUnitName(value, elGetter);
}


/* eslint-enable */
