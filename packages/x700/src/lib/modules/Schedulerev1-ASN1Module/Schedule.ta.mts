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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SequenceOfDays,
    _decode_SequenceOfDays,
    _encode_SequenceOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfDays.ta.mjs';
import {
    SequenceOfWeeks,
    _decode_SequenceOfWeeks,
    _encode_SequenceOfWeeks,
} from '../Schedulerev1-ASN1Module/SequenceOfWeeks.ta.mjs';
import {
    SequenceOfMonths,
    _decode_SequenceOfMonths,
    _encode_SequenceOfMonths,
} from '../Schedulerev1-ASN1Module/SequenceOfMonths.ta.mjs';
import {
    SequenceOfTypeOfDays,
    _decode_SequenceOfTypeOfDays,
    _encode_SequenceOfTypeOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfTypeOfDays.ta.mjs';

/**
 * @summary Schedule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Schedule  ::=  CHOICE {
 *   daily      [0]  SequenceOfDays,
 *   weekly     [1]  SequenceOfWeeks,
 *   monthly    [2]  SequenceOfMonths,
 *   typeOfDay  [3]  SequenceOfTypeOfDays
 * }
 * ```
 */
export type Schedule =
    | { daily: SequenceOfDays } /* CHOICE_ALT_ROOT */
    | { weekly: SequenceOfWeeks } /* CHOICE_ALT_ROOT */
    | { monthly: SequenceOfMonths } /* CHOICE_ALT_ROOT */
    | { typeOfDay: SequenceOfTypeOfDays } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Schedule: $.ASN1Decoder<Schedule> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Schedule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Schedule} The decoded data structure.
 */
export function _decode_Schedule(el: _Element): Schedule {
    if (!_cached_decoder_for_Schedule) {
        _cached_decoder_for_Schedule = $._decode_inextensible_choice<Schedule>({
            'CONTEXT 0': [
                'daily',
                $._decode_implicit<SequenceOfDays>(
                    () => _decode_SequenceOfDays
                ),
            ],
            'CONTEXT 1': [
                'weekly',
                $._decode_implicit<SequenceOfWeeks>(
                    () => _decode_SequenceOfWeeks
                ),
            ],
            'CONTEXT 2': [
                'monthly',
                $._decode_implicit<SequenceOfMonths>(
                    () => _decode_SequenceOfMonths
                ),
            ],
            'CONTEXT 3': [
                'typeOfDay',
                $._decode_implicit<SequenceOfTypeOfDays>(
                    () => _decode_SequenceOfTypeOfDays
                ),
            ],
        });
    }
    return _cached_decoder_for_Schedule(el);
}


let _cached_encoder_for_Schedule: $.ASN1Encoder<Schedule> | null = null;


/**
 * @summary Encodes a(n) Schedule into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Schedule, encoded as an ASN.1 Element.
 */
export function _encode_Schedule(
    value: Schedule,
    elGetter: $.ASN1Encoder<Schedule>
): _Element {
    if (!_cached_encoder_for_Schedule) {
        _cached_encoder_for_Schedule = $._encode_choice<Schedule>(
            {
                daily: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SequenceOfDays,
                    $.BER
                ),
                weekly: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SequenceOfWeeks,
                    $.BER
                ),
                monthly: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SequenceOfMonths,
                    $.BER
                ),
                typeOfDay: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_SequenceOfTypeOfDays,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Schedule(value, elGetter);
}


/* eslint-enable */
