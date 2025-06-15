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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary IPMLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMLocation  ::=  CHOICE {stored  SET OF SequenceNumber,
 *                         absent  NULL,
 *                         ...
 * }
 * ```
 */
export type IPMLocation =
    | { stored: SequenceNumber[] } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IPMLocation: $.ASN1Decoder<IPMLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMLocation} The decoded data structure.
 */
export function _decode_IPMLocation(el: _Element) {
    if (!_cached_decoder_for_IPMLocation) {
        _cached_decoder_for_IPMLocation = $._decode_extensible_choice<IPMLocation>(
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
    return _cached_decoder_for_IPMLocation(el);
}

let _cached_encoder_for_IPMLocation: $.ASN1Encoder<IPMLocation> | null = null;

/**
 * @summary Encodes a(n) IPMLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMLocation, encoded as an ASN.1 Element.
 */
export function _encode_IPMLocation(
    value: IPMLocation,
    elGetter: $.ASN1Encoder<IPMLocation>
) {
    if (!_cached_encoder_for_IPMLocation) {
        _cached_encoder_for_IPMLocation = $._encode_choice<IPMLocation>(
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
    return _cached_encoder_for_IPMLocation(value, elGetter);
}


/* eslint-enable */
