/* eslint-disable */
import {
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
import {
    PointToPoint,
    _decode_PointToPoint,
    _encode_PointToPoint,
} from '../ASN1DefinedTypesModule/PointToPoint.ta.mjs';
import {
    PointToMultipoint,
    _decode_PointToMultipoint,
    _encode_PointToMultipoint,
} from '../ASN1DefinedTypesModule/PointToMultipoint.ta.mjs';

/**
 * @summary Connected
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Connected  ::=  CHOICE {
 *   pointToPoint       [0]  PointToPoint,
 *   pointToMultipoint  [1]  PointToMultipoint
 * }
 * ```
 */
export type Connected =
    | { pointToPoint: PointToPoint } /* CHOICE_ALT_ROOT */
    | { pointToMultipoint: PointToMultipoint } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Connected: $.ASN1Decoder<Connected> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Connected
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Connected} The decoded data structure.
 */
export function _decode_Connected(el: _Element) {
    if (!_cached_decoder_for_Connected) {
        _cached_decoder_for_Connected = $._decode_inextensible_choice<Connected>(
            {
                'CONTEXT 0': [
                    'pointToPoint',
                    $._decode_implicit<PointToPoint>(
                        () => _decode_PointToPoint
                    ),
                ],
                'CONTEXT 1': [
                    'pointToMultipoint',
                    $._decode_implicit<PointToMultipoint>(
                        () => _decode_PointToMultipoint
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Connected(el);
}


let _cached_encoder_for_Connected: $.ASN1Encoder<Connected> | null = null;


/**
 * @summary Encodes a(n) Connected into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Connected, encoded as an ASN.1 Element.
 */
export function _encode_Connected(
    value: Connected,
    elGetter: $.ASN1Encoder<Connected>
) {
    if (!_cached_encoder_for_Connected) {
        _cached_encoder_for_Connected = $._encode_choice<Connected>(
            {
                pointToPoint: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PointToPoint,
                    $.BER
                ),
                pointToMultipoint: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PointToMultipoint,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Connected(value, elGetter);
}


/* eslint-enable */
