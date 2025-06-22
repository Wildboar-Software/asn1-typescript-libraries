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
} from 'asn1-ts';
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
 * @summary ReportingTriggers_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingTriggers-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ReportingTriggers_Item =
    | { periodic: TimePeriod } /* CHOICE_ALT_ROOT */
    | { induced: Induced } /* CHOICE_ALT_ROOT */
    | { event: ReportingEvent } /* CHOICE_ALT_ROOT */
    | { stimulus: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReportingTriggers_Item: $.ASN1Decoder<ReportingTriggers_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingTriggers_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingTriggers_Item} The decoded data structure.
 */
export function _decode_ReportingTriggers_Item(el: _Element) {
    if (!_cached_decoder_for_ReportingTriggers_Item) {
        _cached_decoder_for_ReportingTriggers_Item = $._decode_inextensible_choice<ReportingTriggers_Item>(
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
    return _cached_decoder_for_ReportingTriggers_Item(el);
}

let _cached_encoder_for_ReportingTriggers_Item: $.ASN1Encoder<ReportingTriggers_Item> | null = null;

/**
 * @summary Encodes a(n) ReportingTriggers_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingTriggers_Item, encoded as an ASN.1 Element.
 */
export function _encode_ReportingTriggers_Item(
    value: ReportingTriggers_Item,
    elGetter: $.ASN1Encoder<ReportingTriggers_Item>
) {
    if (!_cached_encoder_for_ReportingTriggers_Item) {
        _cached_encoder_for_ReportingTriggers_Item = $._encode_choice<ReportingTriggers_Item>(
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
    return _cached_encoder_for_ReportingTriggers_Item(value, elGetter);
}


/* eslint-enable */
