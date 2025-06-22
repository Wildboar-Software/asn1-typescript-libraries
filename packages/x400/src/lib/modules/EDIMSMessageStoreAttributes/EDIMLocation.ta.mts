/* eslint-disable */
import {
    NULL,
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
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary EDIMLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMLocation  ::=  CHOICE {stored  SET OF SequenceNumber,
 *                          absent  NULL,
 *                          ...
 * }
 * ```
 */
export type EDIMLocation =
    | { stored: SequenceNumber[] } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_EDIMLocation: $.ASN1Decoder<EDIMLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIMLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMLocation} The decoded data structure.
 */
export function _decode_EDIMLocation(el: _Element) {
    if (!_cached_decoder_for_EDIMLocation) {
        _cached_decoder_for_EDIMLocation = $._decode_extensible_choice<EDIMLocation>(
            {
                'UNIVERSAL 17': [
                    'stored',
                    $._decodeSetOf<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_EDIMLocation(el);
}

let _cached_encoder_for_EDIMLocation: $.ASN1Encoder<EDIMLocation> | null = null;

/**
 * @summary Encodes a(n) EDIMLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMLocation, encoded as an ASN.1 Element.
 */
export function _encode_EDIMLocation(
    value: EDIMLocation,
    elGetter: $.ASN1Encoder<EDIMLocation>
) {
    if (!_cached_encoder_for_EDIMLocation) {
        _cached_encoder_for_EDIMLocation = $._encode_choice<EDIMLocation>(
            {
                stored: $._encodeSetOf<SequenceNumber>(
                    () => _encode_SequenceNumber,
                    $.BER
                ),
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_EDIMLocation(value, elGetter);
}


/* eslint-enable */
