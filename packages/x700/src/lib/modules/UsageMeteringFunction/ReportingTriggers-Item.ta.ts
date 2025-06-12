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
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.js';
export {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.js';
import {
    Induced,
    _enum_for_Induced,
    _decode_Induced,
    _encode_Induced,
} from '../UsageMeteringFunction/Induced.ta.js';
import {
    ReportingEvent,
    _enum_for_ReportingEvent,
    ReportingEvent_registration /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_request /* IMPORTED_LONG_ENUMERATION_ITEM */,
    request /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_accept /* IMPORTED_LONG_ENUMERATION_ITEM */,
    accept /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_complete /* IMPORTED_LONG_ENUMERATION_ITEM */,
    complete /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_corresponding /* IMPORTED_LONG_ENUMERATION_ITEM */,
    corresponding /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_bulk /* IMPORTED_LONG_ENUMERATION_ITEM */,
    bulk /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_interruption /* IMPORTED_LONG_ENUMERATION_ITEM */,
    interruption /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ReportingEvent,
    _encode_ReportingEvent,
} from '../UsageMeteringFunction/ReportingEvent.ta.js';
export {
    ReportingEvent,
    _enum_for_ReportingEvent,
    ReportingEvent_registration /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_request /* IMPORTED_LONG_ENUMERATION_ITEM */,
    request /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_accept /* IMPORTED_LONG_ENUMERATION_ITEM */,
    accept /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_complete /* IMPORTED_LONG_ENUMERATION_ITEM */,
    complete /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_corresponding /* IMPORTED_LONG_ENUMERATION_ITEM */,
    corresponding /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_bulk /* IMPORTED_LONG_ENUMERATION_ITEM */,
    bulk /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportingEvent_interruption /* IMPORTED_LONG_ENUMERATION_ITEM */,
    interruption /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ReportingEvent,
    _encode_ReportingEvent,
} from '../UsageMeteringFunction/ReportingEvent.ta.js';

/* START_OF_SYMBOL_DEFINITION ReportingTriggers_Item */
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
/* END_OF_SYMBOL_DEFINITION ReportingTriggers_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingTriggers_Item */
let _cached_decoder_for_ReportingTriggers_Item: $.ASN1Decoder<ReportingTriggers_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingTriggers_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ReportingTriggers_Item */
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
/* END_OF_SYMBOL_DEFINITION _decode_ReportingTriggers_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingTriggers_Item */
let _cached_encoder_for_ReportingTriggers_Item: $.ASN1Encoder<ReportingTriggers_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingTriggers_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ReportingTriggers_Item */
/**
 * @summary Encodes a(n) ReportingTriggers_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_ReportingTriggers_Item */

/* eslint-enable */
