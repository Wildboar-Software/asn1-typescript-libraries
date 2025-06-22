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
 * @summary PostalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalCode  ::=  CHOICE {
 *   numeric-code    NumericString(SIZE (1..ub-postal-code-length)),
 *   printable-code  PrintableString(SIZE (1..ub-postal-code-length))
 * }
 * ```
 */
export type PostalCode =
    | { numeric_code: NumericString } /* CHOICE_ALT_ROOT */
    | { printable_code: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PostalCode: $.ASN1Decoder<PostalCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PostalCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalCode} The decoded data structure.
 */
export function _decode_PostalCode(el: _Element) {
    if (!_cached_decoder_for_PostalCode) {
        _cached_decoder_for_PostalCode = $._decode_inextensible_choice<PostalCode>(
            {
                'UNIVERSAL 18': ['numeric_code', $._decodeNumericString],
                'UNIVERSAL 19': ['printable_code', $._decodePrintableString],
            }
        );
    }
    return _cached_decoder_for_PostalCode(el);
}

let _cached_encoder_for_PostalCode: $.ASN1Encoder<PostalCode> | null = null;

/**
 * @summary Encodes a(n) PostalCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalCode, encoded as an ASN.1 Element.
 */
export function _encode_PostalCode(
    value: PostalCode,
    elGetter: $.ASN1Encoder<PostalCode>
) {
    if (!_cached_encoder_for_PostalCode) {
        _cached_encoder_for_PostalCode = $._encode_choice<PostalCode>(
            {
                numeric_code: $._encodeNumericString,
                printable_code: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PostalCode(value, elGetter);
}


/* eslint-enable */
