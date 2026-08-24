/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NumericString,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CountryName
 * @description
 *
 * Country of the MD, tagged `[APPLICATION 1]` (ITU-T X.402 (1999), §18.3.3).
 * `iso-3166-alpha2-code` is the ISO 3166 character pair (exactly 2); `x121-dcc-code` is
 * an X.121 Data Country Code (exactly 3 digits). Which form is used is insignificant for
 * equivalence (X.402 §18.4 b, NOTE); if X.121 allocates several numbers to a country,
 * which number is used is not standardized. Printable value `XX` denotes the
 * International Registration Authority for MD names (X.666 / ISO/IEC 9834-7). Some
 * historic addresses used `WW` similarly; ISO 3166 has not assigned `WW`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  [APPLICATION 1]  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length)) }
 * ```
 */
export type CountryName =
    | { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CountryName: $.ASN1Decoder<CountryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryName} The decoded data structure.
 */
export function _decode_CountryName(el: _Element): CountryName {
    if (!_cached_decoder_for_CountryName) {
        _cached_decoder_for_CountryName = $._decode_explicit<CountryName>(() =>
            $._decode_inextensible_choice<CountryName>({
                "UNIVERSAL 18": ["x121_dcc_code", $._decodeNumericString],
                "UNIVERSAL 19": [
                    "iso_3166_alpha2_code",
                    $._decodePrintableString,
                ],
            })
        );
    }
    return _cached_decoder_for_CountryName(el);
}

let _cached_encoder_for_CountryName: $.ASN1Encoder<CountryName> | null = null;

/**
 * @summary Encodes a(n) CountryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryName, encoded as an ASN.1 Element.
 */
export function _encode_CountryName(value: CountryName, elGetter: $.ASN1Encoder<CountryName>): _Element {
    if (!_cached_encoder_for_CountryName) {
        _cached_encoder_for_CountryName = $._encode_explicit(
            _TagClass.application,
            1,
            () =>
                $._encode_choice<CountryName>(
                    {
                        x121_dcc_code: $._encodeNumericString,
                        iso_3166_alpha2_code: $._encodePrintableString,
                    },
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_CountryName(value, elGetter);
}


/* eslint-enable */
