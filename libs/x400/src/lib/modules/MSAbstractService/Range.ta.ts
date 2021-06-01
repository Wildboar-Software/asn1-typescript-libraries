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
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from '../MSAbstractService/NumberRange.ta';
export {
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from '../MSAbstractService/NumberRange.ta';
import {
    TimeRange,
    _decode_TimeRange,
    _encode_TimeRange,
} from '../MSAbstractService/TimeRange.ta';
export {
    TimeRange,
    _decode_TimeRange,
    _encode_TimeRange,
} from '../MSAbstractService/TimeRange.ta';

/* START_OF_SYMBOL_DEFINITION Range */
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
/* END_OF_SYMBOL_DEFINITION Range */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Range */
let _cached_decoder_for_Range: $.ASN1Decoder<Range> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Range */

/* START_OF_SYMBOL_DEFINITION _decode_Range */
/**
 * @summary Decodes an ASN.1 element into a(n) Range
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Range} The decoded data structure.
 */
export function _decode_Range(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_Range */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Range */
let _cached_encoder_for_Range: $.ASN1Encoder<Range> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Range */

/* START_OF_SYMBOL_DEFINITION _encode_Range */
/**
 * @summary Encodes a(n) Range into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Range, encoded as an ASN.1 Element.
 */
export function _encode_Range(value: Range, elGetter: $.ASN1Encoder<Range>) {
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

/* END_OF_SYMBOL_DEFINITION _encode_Range */

/* eslint-enable */
