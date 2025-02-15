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
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta';
export {
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta';

/* START_OF_SYMBOL_DEFINITION SequenceOfWeeks */
/**
 * @summary SequenceOfWeeks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfWeeks  ::=  SEQUENCE OF WeekMaskWps
 * ```
 */
export type SequenceOfWeeks = WeekMaskWps[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SequenceOfWeeks */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfWeeks */
let _cached_decoder_for_SequenceOfWeeks: $.ASN1Decoder<SequenceOfWeeks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfWeeks */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfWeeks */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfWeeks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfWeeks} The decoded data structure.
 */
export function _decode_SequenceOfWeeks(el: _Element) {
    if (!_cached_decoder_for_SequenceOfWeeks) {
        _cached_decoder_for_SequenceOfWeeks = $._decodeSequenceOf<WeekMaskWps>(
            () => _decode_WeekMaskWps
        );
    }
    return _cached_decoder_for_SequenceOfWeeks(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfWeeks */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfWeeks */
let _cached_encoder_for_SequenceOfWeeks: $.ASN1Encoder<SequenceOfWeeks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfWeeks */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfWeeks */
/**
 * @summary Encodes a(n) SequenceOfWeeks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfWeeks, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfWeeks(
    value: SequenceOfWeeks,
    elGetter: $.ASN1Encoder<SequenceOfWeeks>
) {
    if (!_cached_encoder_for_SequenceOfWeeks) {
        _cached_encoder_for_SequenceOfWeeks = $._encodeSequenceOf<WeekMaskWps>(
            () => _encode_WeekMaskWps,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfWeeks(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfWeeks */

/* eslint-enable */
