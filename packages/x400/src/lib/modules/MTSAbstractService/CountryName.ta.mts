/* eslint-disable */
import {
    NumericString,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary CountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  [APPLICATION 1]  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length))
 * }
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
                'UNIVERSAL 18': ['x121_dcc_code', $._decodeNumericString],
                'UNIVERSAL 19': [
                    'iso_3166_alpha2_code',
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
export function _encode_CountryName(
    value: CountryName,
    elGetter: $.ASN1Encoder<CountryName>
): _Element {
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
