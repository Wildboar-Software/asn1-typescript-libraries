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
    ArcInterval,
    _decode_ArcInterval,
    _encode_ArcInterval,
} from '../M3100ASN1TypeModule4/ArcInterval.ta.mjs';

/**
 * @summary ArcTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcTime  ::=  CHOICE {
 *   noAdjustment  [0]  NULL,
 *   time          [1]  ArcInterval -- minutes
 * }
 * ```
 */
export type ArcTime =
    | { noAdjustment: NULL } /* CHOICE_ALT_ROOT */
    | { time: ArcInterval } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ArcTime: $.ASN1Decoder<ArcTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcTime} The decoded data structure.
 */
export function _decode_ArcTime(el: _Element): ArcTime {
    if (!_cached_decoder_for_ArcTime) {
        _cached_decoder_for_ArcTime = $._decode_inextensible_choice<ArcTime>({
            'CONTEXT 0': [
                'noAdjustment',
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            'CONTEXT 1': [
                'time',
                $._decode_implicit<ArcInterval>(() => _decode_ArcInterval),
            ],
        });
    }
    return _cached_decoder_for_ArcTime(el);
}


let _cached_encoder_for_ArcTime: $.ASN1Encoder<ArcTime> | null = null;


/**
 * @summary Encodes a(n) ArcTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcTime, encoded as an ASN.1 Element.
 */
export function _encode_ArcTime(
    value: ArcTime,
    elGetter: $.ASN1Encoder<ArcTime>
): _Element {
    if (!_cached_encoder_for_ArcTime) {
        _cached_encoder_for_ArcTime = $._encode_choice<ArcTime>(
            {
                noAdjustment: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ArcInterval,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ArcTime(value, elGetter);
}


/* eslint-enable */
