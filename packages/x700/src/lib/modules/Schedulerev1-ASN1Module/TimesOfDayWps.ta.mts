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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    IntervalsOfDayWps,
    _decode_IntervalsOfDayWps,
    _encode_IntervalsOfDayWps,
} from '../Schedulerev1-ASN1Module/IntervalsOfDayWps.ta.mjs';
import {
    TriggerTimes,
    _decode_TriggerTimes,
    _encode_TriggerTimes,
} from '../Schedulerev1-ASN1Module/TriggerTimes.ta.mjs';
/**
 * @summary TimesOfDayWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimesOfDayWps  ::=  CHOICE {
 *   intervalsOfDayWps  [0] IMPLICIT IntervalsOfDayWps,
 *   triggerTimes       [1] IMPLICIT TriggerTimes
 * }
 * ```
 */
export type TimesOfDayWps =
    | { intervalsOfDayWps: IntervalsOfDayWps } /* CHOICE_ALT_ROOT */
    | { triggerTimes: TriggerTimes } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimesOfDayWps: $.ASN1Decoder<TimesOfDayWps> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimesOfDayWps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimesOfDayWps} The decoded data structure.
 */
export function _decode_TimesOfDayWps(el: _Element) {
    if (!_cached_decoder_for_TimesOfDayWps) {
        _cached_decoder_for_TimesOfDayWps = $._decode_inextensible_choice<TimesOfDayWps>(
            {
                'CONTEXT 0': [
                    'intervalsOfDayWps',
                    $._decode_implicit<IntervalsOfDayWps>(
                        () => _decode_IntervalsOfDayWps
                    ),
                ],
                'CONTEXT 1': [
                    'triggerTimes',
                    $._decode_implicit<TriggerTimes>(
                        () => _decode_TriggerTimes
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TimesOfDayWps(el);
}

let _cached_encoder_for_TimesOfDayWps: $.ASN1Encoder<TimesOfDayWps> | null = null;

/**
 * @summary Encodes a(n) TimesOfDayWps into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimesOfDayWps, encoded as an ASN.1 Element.
 */
export function _encode_TimesOfDayWps(
    value: TimesOfDayWps,
    elGetter: $.ASN1Encoder<TimesOfDayWps>
) {
    if (!_cached_encoder_for_TimesOfDayWps) {
        _cached_encoder_for_TimesOfDayWps = $._encode_choice<TimesOfDayWps>(
            {
                intervalsOfDayWps: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IntervalsOfDayWps,
                    $.BER
                ),
                triggerTimes: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TriggerTimes,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TimesOfDayWps(value, elGetter);
}


/* eslint-enable */
