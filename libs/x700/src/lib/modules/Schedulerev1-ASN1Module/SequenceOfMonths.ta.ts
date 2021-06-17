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
    MonthMask,
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta';
export {
    MonthMask,
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta';

/* START_OF_SYMBOL_DEFINITION SequenceOfMonths */
/**
 * @summary SequenceOfMonths
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfMonths  ::=  SEQUENCE OF MonthMask
 * ```
 */
export type SequenceOfMonths = MonthMask[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfMonths */
let _cached_decoder_for_SequenceOfMonths: $.ASN1Decoder<SequenceOfMonths> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfMonths */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfMonths
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfMonths} The decoded data structure.
 */
export function _decode_SequenceOfMonths(el: _Element) {
    if (!_cached_decoder_for_SequenceOfMonths) {
        _cached_decoder_for_SequenceOfMonths = $._decodeSequenceOf<MonthMask>(
            () => _decode_MonthMask
        );
    }
    return _cached_decoder_for_SequenceOfMonths(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfMonths */
let _cached_encoder_for_SequenceOfMonths: $.ASN1Encoder<SequenceOfMonths> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfMonths */
/**
 * @summary Encodes a(n) SequenceOfMonths into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfMonths, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfMonths(
    value: SequenceOfMonths,
    elGetter: $.ASN1Encoder<SequenceOfMonths>
) {
    if (!_cached_encoder_for_SequenceOfMonths) {
        _cached_encoder_for_SequenceOfMonths = $._encodeSequenceOf<MonthMask>(
            () => _encode_MonthMask,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfMonths(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfMonths */

/* eslint-enable */
