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
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from '../MSAbstractService/NumberRange.ta.mjs';
import {
    TimeRange,
    _decode_TimeRange,
    _encode_TimeRange,
} from '../MSAbstractService/TimeRange.ta.mjs';
/**
 * @summary Range
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Range  ::=  CHOICE {
 *   sequence-number-range  [0]  NumberRange,
 *   creation-time-range    [1]  TimeRange
 * }
 * ```
 */
export type Range =
    | { sequence_number_range: NumberRange } /* CHOICE_ALT_ROOT */
    | { creation_time_range: TimeRange } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Range: $.ASN1Decoder<Range> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Range
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Range} The decoded data structure.
 */
export function _decode_Range(el: _Element): Range {
    if (!_cached_decoder_for_Range) {
        _cached_decoder_for_Range = $._decode_inextensible_choice<Range>({
            'CONTEXT 0': [
                'sequence_number_range',
                $._decode_implicit<NumberRange>(() => _decode_NumberRange),
            ],
            'CONTEXT 1': [
                'creation_time_range',
                $._decode_implicit<TimeRange>(() => _decode_TimeRange),
            ],
        });
    }
    return _cached_decoder_for_Range(el);
}

let _cached_encoder_for_Range: $.ASN1Encoder<Range> | null = null;

/**
 * @summary Encodes a(n) Range into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Range, encoded as an ASN.1 Element.
 */
export function _encode_Range(value: Range, elGetter: $.ASN1Encoder<Range>): _Element {
    if (!_cached_encoder_for_Range) {
        _cached_encoder_for_Range = $._encode_choice<Range>(
            {
                sequence_number_range: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_NumberRange,
                    $.BER
                ),
                creation_time_range: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TimeRange,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Range(value, elGetter);
}


/* eslint-enable */
