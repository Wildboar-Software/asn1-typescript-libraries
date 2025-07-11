/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';
import {
    Induced,
    _enum_for_Induced,
    _decode_Induced,
    _encode_Induced,
} from '../UsageMeteringFunction/Induced.ta.mjs';
import {
    ReportingEvent,
    _enum_for_ReportingEvent,
    _decode_ReportingEvent,
    _encode_ReportingEvent,
} from '../UsageMeteringFunction/ReportingEvent.ta.mjs';

/**
 * @summary NotificationCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationCause  ::=  CHOICE {
 *   periodic  [1]  TimePeriod,
 *   induced   [2]  Induced,
 *   event     [3]  ReportingEvent,
 *   stimulus  [4]  OBJECT IDENTIFIER
 * }
 * ```
 */
export type NotificationCause =
    | { periodic: TimePeriod } /* CHOICE_ALT_ROOT */
    | { induced: Induced } /* CHOICE_ALT_ROOT */
    | { event: ReportingEvent } /* CHOICE_ALT_ROOT */
    | { stimulus: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NotificationCause: $.ASN1Decoder<NotificationCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationCause} The decoded data structure.
 */
export function _decode_NotificationCause(el: _Element): NotificationCause {
    if (!_cached_decoder_for_NotificationCause) {
        _cached_decoder_for_NotificationCause = $._decode_inextensible_choice<NotificationCause>(
            {
                'CONTEXT 1': [
                    'periodic',
                    $._decode_explicit<TimePeriod>(() => _decode_TimePeriod),
                ],
                'CONTEXT 2': [
                    'induced',
                    $._decode_implicit<Induced>(() => _decode_Induced),
                ],
                'CONTEXT 3': [
                    'event',
                    $._decode_implicit<ReportingEvent>(
                        () => _decode_ReportingEvent
                    ),
                ],
                'CONTEXT 4': [
                    'stimulus',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_NotificationCause(el);
}

let _cached_encoder_for_NotificationCause: $.ASN1Encoder<NotificationCause> | null = null;

/**
 * @summary Encodes a(n) NotificationCause into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationCause, encoded as an ASN.1 Element.
 */
export function _encode_NotificationCause(
    value: NotificationCause,
    elGetter: $.ASN1Encoder<NotificationCause>
): _Element {
    if (!_cached_encoder_for_NotificationCause) {
        _cached_encoder_for_NotificationCause = $._encode_choice<NotificationCause>(
            {
                periodic: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_TimePeriod,
                    $.BER
                ),
                induced: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_Induced,
                    $.BER
                ),
                event: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ReportingEvent,
                    $.BER
                ),
                stimulus: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_NotificationCause(value, elGetter);
}


/* eslint-enable */
