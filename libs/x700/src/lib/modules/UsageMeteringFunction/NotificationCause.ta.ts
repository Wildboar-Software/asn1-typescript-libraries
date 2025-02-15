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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta';
export {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta';
import {
    Induced,
    _enum_for_Induced,
    _decode_Induced,
    _encode_Induced,
} from '../UsageMeteringFunction/Induced.ta';
import {
    ReportingEvent,
    _enum_for_ReportingEvent,
    _decode_ReportingEvent,
    _encode_ReportingEvent,
} from '../UsageMeteringFunction/ReportingEvent.ta';

/* START_OF_SYMBOL_DEFINITION NotificationCause */
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
/* END_OF_SYMBOL_DEFINITION NotificationCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationCause */
let _cached_decoder_for_NotificationCause: $.ASN1Decoder<NotificationCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationCause */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationCause */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationCause} The decoded data structure.
 */
export function _decode_NotificationCause(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_NotificationCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationCause */
let _cached_encoder_for_NotificationCause: $.ASN1Encoder<NotificationCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationCause */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationCause */
/**
 * @summary Encodes a(n) NotificationCause into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationCause, encoded as an ASN.1 Element.
 */
export function _encode_NotificationCause(
    value: NotificationCause,
    elGetter: $.ASN1Encoder<NotificationCause>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_NotificationCause */

/* eslint-enable */
