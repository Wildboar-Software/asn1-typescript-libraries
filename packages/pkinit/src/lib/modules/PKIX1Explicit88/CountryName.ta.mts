/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NumericString,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_country_name_alpha_length } from "../PKIX1Explicit88/ub-country-name-alpha-length.va.mjs";
import { ub_country_name_numeric_length } from "../PKIX1Explicit88/ub-country-name-numeric-length.va.mjs";



/**
 * @summary CountryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountryName  ::=  [APPLICATION 1] CHOICE {
 *    x121-dcc-code         NumericString
 *                            (SIZE (ub-country-name-numeric-length)),
 *    iso-3166-alpha2-code  PrintableString
 *                            (SIZE (ub-country-name-alpha-length)) }
 * ```
 */
export
type CountryName =
    { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CountryName: $.ASN1Decoder<CountryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountryName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CountryName (el: _Element): CountryName {
    if (!_cached_decoder_for_CountryName) { _cached_decoder_for_CountryName = $._decode_explicit<CountryName>(() => $._decode_inextensible_choice<CountryName>({
    "UNIVERSAL 18": [ "x121_dcc_code", $._decodeNumericString ],
    "UNIVERSAL 19": [ "iso_3166_alpha2_code", $._decodePrintableString ]
})); }
    const value = _cached_decoder_for_CountryName(el);
    const chosen = Object.values(value)[0];
    const expected = "x121_dcc_code" in value
        ? ub_country_name_numeric_length
        : ub_country_name_alpha_length;
    if (chosen.length !== Number(expected)) {
        throw new ASN1SizeError("CountryName violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CountryName: $.ASN1Encoder<CountryName> | null = null;

/**
 * @summary Encodes a(n) CountryName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryName, encoded as an ASN.1 Element.
 */
export
function _encode_CountryName (value: CountryName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CountryName) { _cached_encoder_for_CountryName = $._encode_explicit(_TagClass.application, 1, () => $._encode_choice<CountryName>({
    "x121_dcc_code": $._encodeNumericString,
    "iso_3166_alpha2_code": $._encodePrintableString,
}, $.BER), $.BER); }
    return _cached_encoder_for_CountryName(value, elGetter);
}


/* eslint-enable */
