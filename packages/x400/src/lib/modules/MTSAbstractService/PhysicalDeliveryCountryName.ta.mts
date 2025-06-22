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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary PhysicalDeliveryCountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryCountryName  ::=  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length))
 * }
 * ```
 */
export type PhysicalDeliveryCountryName =
    | { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PhysicalDeliveryCountryName: $.ASN1Decoder<PhysicalDeliveryCountryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryCountryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryCountryName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryCountryName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryCountryName) {
        _cached_decoder_for_PhysicalDeliveryCountryName = $._decode_inextensible_choice<PhysicalDeliveryCountryName>(
            {
                'UNIVERSAL 18': ['x121_dcc_code', $._decodeNumericString],
                'UNIVERSAL 19': [
                    'iso_3166_alpha2_code',
                    $._decodePrintableString,
                ],
            }
        );
    }
    return _cached_decoder_for_PhysicalDeliveryCountryName(el);
}

let _cached_encoder_for_PhysicalDeliveryCountryName: $.ASN1Encoder<PhysicalDeliveryCountryName> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeliveryCountryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryCountryName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryCountryName(
    value: PhysicalDeliveryCountryName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryCountryName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryCountryName) {
        _cached_encoder_for_PhysicalDeliveryCountryName = $._encode_choice<PhysicalDeliveryCountryName>(
            {
                x121_dcc_code: $._encodeNumericString,
                iso_3166_alpha2_code: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PhysicalDeliveryCountryName(value, elGetter);
}


/* eslint-enable */
