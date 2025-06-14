/* eslint-disable */
import {
    NULL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION OptionallyRegisteredAs */
/**
 * @summary OptionallyRegisteredAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionallyRegisteredAs  ::=  CHOICE {present  OBJECT IDENTIFIER,
 *                                    absent   NULL
 * }
 * ```
 */
export type OptionallyRegisteredAs =
    | { present: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OptionallyRegisteredAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionallyRegisteredAs */
let _cached_decoder_for_OptionallyRegisteredAs: $.ASN1Decoder<OptionallyRegisteredAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionallyRegisteredAs */

/* START_OF_SYMBOL_DEFINITION _decode_OptionallyRegisteredAs */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionallyRegisteredAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionallyRegisteredAs} The decoded data structure.
 */
export function _decode_OptionallyRegisteredAs(el: _Element) {
    if (!_cached_decoder_for_OptionallyRegisteredAs) {
        _cached_decoder_for_OptionallyRegisteredAs = $._decode_inextensible_choice<OptionallyRegisteredAs>(
            {
                'UNIVERSAL 6': ['present', $._decodeObjectIdentifier],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_OptionallyRegisteredAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionallyRegisteredAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionallyRegisteredAs */
let _cached_encoder_for_OptionallyRegisteredAs: $.ASN1Encoder<OptionallyRegisteredAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionallyRegisteredAs */

/* START_OF_SYMBOL_DEFINITION _encode_OptionallyRegisteredAs */
/**
 * @summary Encodes a(n) OptionallyRegisteredAs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionallyRegisteredAs, encoded as an ASN.1 Element.
 */
export function _encode_OptionallyRegisteredAs(
    value: OptionallyRegisteredAs,
    elGetter: $.ASN1Encoder<OptionallyRegisteredAs>
) {
    if (!_cached_encoder_for_OptionallyRegisteredAs) {
        _cached_encoder_for_OptionallyRegisteredAs = $._encode_choice<OptionallyRegisteredAs>(
            {
                present: $._encodeObjectIdentifier,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OptionallyRegisteredAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionallyRegisteredAs */

/* eslint-enable */
