/* eslint-disable */
import {
    INTEGER,
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
 * @summary TimePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimePeriod  ::=  CHOICE {
 *   days          [0]  INTEGER,
 *   hours         [1]  INTEGER,
 *   minutes       [2]  INTEGER,
 *   seconds       [3]  INTEGER,
 *   milliSeconds  [4]  INTEGER,
 *   microSeconds  [5]  INTEGER,
 *   nanoSeconds   [6]  INTEGER,
 *   picoSeconds   [7]  INTEGER
 * }
 * ```
 */
export type TimePeriod =
    | { days: INTEGER } /* CHOICE_ALT_ROOT */
    | { hours: INTEGER } /* CHOICE_ALT_ROOT */
    | { minutes: INTEGER } /* CHOICE_ALT_ROOT */
    | { seconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { milliSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { microSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { nanoSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { picoSeconds: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimePeriod: $.ASN1Decoder<TimePeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimePeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimePeriod} The decoded data structure.
 */
export function _decode_TimePeriod(el: _Element): TimePeriod {
    if (!_cached_decoder_for_TimePeriod) {
        _cached_decoder_for_TimePeriod = $._decode_inextensible_choice<TimePeriod>(
            {
                'CONTEXT 0': [
                    'days',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'hours',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 2': [
                    'minutes',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 3': [
                    'seconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 4': [
                    'milliSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 5': [
                    'microSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 6': [
                    'nanoSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 7': [
                    'picoSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_TimePeriod(el);
}

let _cached_encoder_for_TimePeriod: $.ASN1Encoder<TimePeriod> | null = null;

/**
 * @summary Encodes a(n) TimePeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimePeriod, encoded as an ASN.1 Element.
 */
export function _encode_TimePeriod(
    value: TimePeriod,
    elGetter: $.ASN1Encoder<TimePeriod>
): _Element {
    if (!_cached_encoder_for_TimePeriod) {
        _cached_encoder_for_TimePeriod = $._encode_choice<TimePeriod>(
            {
                days: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                hours: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.BER
                ),
                minutes: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeInteger,
                    $.BER
                ),
                seconds: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeInteger,
                    $.BER
                ),
                milliSeconds: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeInteger,
                    $.BER
                ),
                microSeconds: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => $._encodeInteger,
                    $.BER
                ),
                nanoSeconds: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeInteger,
                    $.BER
                ),
                picoSeconds: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TimePeriod(value, elGetter);
}


/* eslint-enable */
