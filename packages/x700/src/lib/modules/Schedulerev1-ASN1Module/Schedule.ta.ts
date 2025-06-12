/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    SequenceOfDays,
    _decode_SequenceOfDays,
    _encode_SequenceOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfDays.ta.js';
export {
    SequenceOfDays,
    _decode_SequenceOfDays,
    _encode_SequenceOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfDays.ta.js';
import {
    SequenceOfWeeks,
    _decode_SequenceOfWeeks,
    _encode_SequenceOfWeeks,
} from '../Schedulerev1-ASN1Module/SequenceOfWeeks.ta.js';
export {
    SequenceOfWeeks,
    _decode_SequenceOfWeeks,
    _encode_SequenceOfWeeks,
} from '../Schedulerev1-ASN1Module/SequenceOfWeeks.ta.js';
import {
    SequenceOfMonths,
    _decode_SequenceOfMonths,
    _encode_SequenceOfMonths,
} from '../Schedulerev1-ASN1Module/SequenceOfMonths.ta.js';
export {
    SequenceOfMonths,
    _decode_SequenceOfMonths,
    _encode_SequenceOfMonths,
} from '../Schedulerev1-ASN1Module/SequenceOfMonths.ta.js';
import {
    SequenceOfTypeOfDays,
    _decode_SequenceOfTypeOfDays,
    _encode_SequenceOfTypeOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfTypeOfDays.ta.js';
export {
    SequenceOfTypeOfDays,
    _decode_SequenceOfTypeOfDays,
    _encode_SequenceOfTypeOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfTypeOfDays.ta.js';

/* START_OF_SYMBOL_DEFINITION Schedule */
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
/* END_OF_SYMBOL_DEFINITION Schedule */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Schedule */
let _cached_decoder_for_Schedule: $.ASN1Decoder<Schedule> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Schedule */

/* START_OF_SYMBOL_DEFINITION _decode_Schedule */
/**
 * @summary Decodes an ASN.1 element into a(n) Schedule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Schedule} The decoded data structure.
 */
export function _decode_Schedule(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_Schedule */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Schedule */
let _cached_encoder_for_Schedule: $.ASN1Encoder<Schedule> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Schedule */

/* START_OF_SYMBOL_DEFINITION _encode_Schedule */
/**
 * @summary Encodes a(n) Schedule into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Schedule, encoded as an ASN.1 Element.
 */
export function _encode_Schedule(
    value: Schedule,
    elGetter: $.ASN1Encoder<Schedule>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_Schedule */

/* eslint-enable */
